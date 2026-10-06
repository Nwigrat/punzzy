import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { isAcceptedAnswer, puzzles } from '../data/puzzles';
import { initialProgress, loadProgress, saveProgress, type Progress } from '../game/progress';

export default function GameScreen() {
  const [progress, setProgress] = useState<Progress>(initialProgress);
  const [ready, setReady] = useState(false);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [storageError, setStorageError] = useState('');
  const writes = useRef(Promise.resolve());

  useEffect(() => {
    let active = true;
    loadProgress()
      .then((saved) => { if (active) setProgress(saved); })
      .catch(() => { if (active) setStorageError('Could not load your progress. You can still play.'); })
      .finally(() => { if (active) setReady(true); });
    return () => { active = false; };
  }, []);

  function updateProgress(next: Progress) {
    setProgress(next);
    // Serialize writes so quick taps cannot leave an older save on disk.
    writes.current = writes.current.then(() => saveProgress(next))
      .then(() => setStorageError(''))
      .catch(() => setStorageError('Could not save progress on this device. Your next action will retry.'));
  }

  const puzzle = puzzles[progress.index];
  const finished = progress.solved && progress.index === puzzles.length - 1;

  function checkAnswer() {
    if (progress.solved || !answer.trim()) return;
    if (isAcceptedAnswer(puzzle, answer)) {
      Keyboard.dismiss();
      setFeedback('');
      updateProgress({ ...progress, solved: true });
    } else {
      setFeedback('Not quite. Try another answer or reveal a hint.');
    }
  }

  function nextPuzzle() {
    setAnswer('');
    setFeedback('');
    updateProgress(finished ? initialProgress : { index: progress.index + 1, hints: 0, solved: false });
  }

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} enabled={Platform.OS !== 'web'} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {!ready ? <ActivityIndicator style={styles.loading} size="large" accessibilityLabel="Loading saved progress" /> : (
          <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.content}>
            <Text style={styles.eyebrow}>A LITTLE WORDPLAY</Text>
            <Text accessibilityRole="header" style={styles.title}>Pun Puzzle</Text>
            <Text style={styles.muted}>Find the pun. Need a nudge? Reveal a hint.</Text>
            <Text style={styles.muted}>Puzzle {progress.index + 1} of {puzzles.length} · {progress.index + Number(progress.solved)} solved</Text>
            <View style={styles.card}>
              <Image source={puzzle.image} style={styles.image} resizeMode="contain" accessibilityLabel="Placeholder puzzle artwork; the clue is written below" />
              <Text style={styles.placeholder}>PLACEHOLDER ART</Text>
              <Text style={styles.clue}>{puzzle.clue}</Text>
            </View>
            {progress.solved ? (
              <View style={styles.section}>
                <Text accessibilityLiveRegion="polite" style={styles.success}>{finished ? 'You solved them all!' : 'You got it!'}</Text>
                <Text style={styles.answer}>{puzzle.acceptedAnswers[0]}</Text>
                <Pressable accessibilityRole="button" style={styles.primary} onPress={nextPuzzle}>
                  <Text style={styles.primaryText}>{finished ? 'Play again' : 'Next puzzle'}</Text>
                </Pressable>
              </View>
            ) : (
              <View style={styles.section}>
                <Text style={styles.label}>Your answer</Text>
                <TextInput accessibilityLabel="Your answer" style={styles.input} value={answer} onChangeText={(text) => { setAnswer(text); setFeedback(''); }} placeholder="Type your best pun…" placeholderTextColor="#77766f" autoCapitalize="none" autoCorrect={false} returnKeyType="done" onSubmitEditing={checkAnswer} maxLength={120} />
                <Pressable accessibilityRole="button" accessibilityState={{ disabled: !answer.trim() }} disabled={!answer.trim()} style={[styles.primary, !answer.trim() && styles.disabled]} onPress={checkAnswer}>
                  <Text style={styles.primaryText}>Check answer</Text>
                </Pressable>
                {!!feedback && <Text accessibilityLiveRegion="polite" style={styles.error}>{feedback}</Text>}
                <Pressable accessibilityRole="button" accessibilityState={{ disabled: progress.hints === puzzle.hints.length }} disabled={progress.hints === puzzle.hints.length} style={styles.secondary} onPress={() => updateProgress({ ...progress, hints: progress.hints + 1 })}>
                  <Text style={styles.label}>{progress.hints === puzzle.hints.length ? 'All hints revealed' : `Reveal a hint (${progress.hints}/${puzzle.hints.length})`}</Text>
                </Pressable>
              </View>
            )}
            <View accessibilityLiveRegion="polite" style={styles.section}>
              {puzzle.hints.slice(0, progress.hints).map((hint, index) => <Text style={styles.hint} key={hint}>{index + 1}. {hint}</Text>)}
            </View>
            {!!storageError && <Text accessibilityLiveRegion="polite" style={styles.error}>{storageError}</Text>}
            <Text style={styles.footer}>Small puzzles. Big groans.{Platform.OS === 'web' ? '\nProgress stays in this browser.' : ''}</Text>
          </ScrollView>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#faf7ef' },
  loading: { flex: 1 },
  content: { padding: 24, paddingVertical: 40, gap: 12, width: '100%', maxWidth: 640, alignSelf: 'center' },
  eyebrow: { color: '#68754a', fontSize: 12, fontWeight: '700', letterSpacing: 2 },
  title: { color: '#252c23', fontSize: 36, fontWeight: '800' },
  muted: { color: '#62665d', fontSize: 15 },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 20, gap: 12, marginVertical: 8 },
  image: { width: '100%', height: 170 },
  placeholder: { fontSize: 10, letterSpacing: 2, textAlign: 'center', color: '#77766f' },
  clue: { fontSize: 23, fontWeight: '600', color: '#252c23', textAlign: 'center', lineHeight: 31 },
  section: { gap: 12 },
  label: { fontSize: 16, fontWeight: '600', color: '#344c36' },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#a2aa97', borderRadius: 12, padding: 16, fontSize: 18, color: '#252c23', minHeight: 54 },
  primary: { backgroundColor: '#344c36', borderRadius: 12, padding: 16, alignItems: 'center', minHeight: 52 },
  primaryText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  secondary: { padding: 16, alignItems: 'center', minHeight: 52 },
  disabled: { opacity: 0.45 },
  error: { color: '#963e29', fontSize: 15, lineHeight: 22 },
  success: { color: '#344c36', fontSize: 24, fontWeight: '700', textAlign: 'center' },
  answer: { textAlign: 'center', fontSize: 20, color: '#344c36' },
  hint: { backgroundColor: '#eeeede', padding: 14, borderRadius: 12, color: '#414938', fontSize: 15, lineHeight: 22 },
  footer: { textAlign: 'center', color: '#77766f', fontSize: 13, marginVertical: 12 },
});

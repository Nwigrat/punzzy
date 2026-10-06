import AsyncStorage from '@react-native-async-storage/async-storage';
import { puzzles } from '../data/puzzles';

const STORAGE_KEY = 'pun-puzzle.progress.v1';
export type Progress = { index: number; hints: number; solved: boolean };
export const initialProgress: Progress = { index: 0, hints: 0, solved: false };

export async function loadProgress(): Promise<Progress> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return initialProgress;
  try {
    const value = JSON.parse(raw);
    if (
      value && Number.isInteger(value.index) && value.index >= 0 && value.index < puzzles.length &&
      Number.isInteger(value.hints) && value.hints >= 0 &&
      value.hints <= puzzles[value.index].hints.length && typeof value.solved === 'boolean'
    ) return { index: value.index, hints: value.hints, solved: value.solved };
  } catch {
    // An invalid or outdated save starts a fresh game.
  }
  return initialProgress;
}

export function saveProgress(progress: Progress): Promise<void> {
  return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

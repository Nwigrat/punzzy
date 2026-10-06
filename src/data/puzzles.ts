import type { ImageSourcePropType } from 'react-native';
import { extraPuzzles } from './extra-puzzles';

export type Puzzle = {
  id: string;
  image: ImageSourcePropType;
  clue: string;
  acceptedAnswers: readonly string[];
  hints: readonly string[];
  source?: { repository: string; file: string };
};

export const puzzles: readonly Puzzle[] = [
  {
    id: 'impasta',
    image: require('../../assets/puzzle-placeholder.png'),
    clue: 'What do you call a fake noodle?',
    acceptedAnswers: ['impasta', 'an impasta', 'im pasta', 'an im pasta'],
    hints: ['Think of someone pretending to be someone else.', 'Mix “impostor” with an Italian food.', 'An im-pasta!'],
  },
  {
    id: 'nacho-cheese',
    image: require('../../assets/puzzle-placeholder.png'),
    clue: 'What do you call cheese that is not yours?',
    acceptedAnswers: ['nacho cheese', 'nacho'],
    hints: ['It belongs to someone else.', 'Say “not your” out loud.', 'It goes on tortilla chips: nacho cheese.'],
  },
  {
    id: 'gummy-bear',
    image: require('../../assets/puzzle-placeholder.png'),
    clue: 'What do you call a bear with no teeth?',
    acceptedAnswers: ['gummy bear', 'a gummy bear'],
    hints: ['What is left when teeth are gone?', 'It is also a chewy sweet.', 'A gummy bear!'],
  },
  // Adapted from geekygirlsarah/puns. Keep new puzzles after existing entries:
  // saved progress uses the puzzle's index. See THIRD_PARTY_NOTICES.md.
  {
    id: 'sarah-sql-join',
    image: require('../../assets/puzzle-placeholder.png'),
    clue: 'A SQL query walks into a bar and approaches two tables. What does it ask?',
    acceptedAnswers: ['can I join you', 'may I join you'],
    hints: ['It wants to sit with them.', 'SQL combines tables with a JOIN.', 'Can I join you?'],
    source: { repository: 'https://github.com/geekygirlsarah/puns', file: 'technology.md' },
  },
  {
    id: 'sarah-unix-sea',
    image: require('../../assets/puzzle-placeholder.png'),
    clue: 'Hold a Unix shell to your ear. What programming language can you hear?',
    acceptedAnswers: ['C', 'the C', 'C language'],
    hints: ['Think of a seashell.', 'The language sounds like an ocean.', 'C!'],
    source: { repository: 'https://github.com/geekygirlsarah/puns', file: 'technology.md' },
  },
  {
    id: 'sarah-that-hertz',
    image: require('../../assets/puzzle-placeholder.png'),
    clue: 'An electrical engineer gets a shock. What two-word pun do they say?',
    acceptedAnswers: ['that hertz', 'it hertz'],
    hints: ['The shock was painful.', 'Replace “hurts” with a unit of frequency.', 'That hertz!'],
    source: { repository: 'https://github.com/geekygirlsarah/puns', file: 'technology.md' },
  },
  {
    id: 'sarah-positive-proton',
    image: require('../../assets/puzzle-placeholder.png'),
    clue: 'A proton is asked whether it is sure it left its card at the bar. How does it reply?',
    acceptedAnswers: ["I'm positive", 'I am positive', 'positive'],
    hints: ['It is completely sure.', 'Think of the electrical charge of a proton.', 'I am positive!'],
    source: { repository: 'https://github.com/geekygirlsarah/puns', file: 'science.md' },
  },
  {
    id: 'sarah-neutron-charge',
    image: require('../../assets/puzzle-placeholder.png'),
    clue: 'A neutron asks how much its drink costs. What does the bartender say?',
    acceptedAnswers: ['no charge', 'for you no charge', 'there is no charge'],
    hints: ['The drink is free.', 'A neutron has no electrical charge.', 'For you, no charge!'],
    source: { repository: 'https://github.com/geekygirlsarah/puns', file: 'science.md' },
  },
  {
    id: 'sarah-sodium',
    image: require('../../assets/puzzle-placeholder.png'),
    clue: 'Know any sodium puns? Answer with its two-letter chemical symbol.',
    acceptedAnswers: ['Na'],
    hints: ['It sounds like an informal way to say no.', 'The symbol begins with N.', 'Na!'],
    source: { repository: 'https://github.com/geekygirlsarah/puns', file: 'science.md' },
  },
  ...extraPuzzles,
];

export function normalizeAnswer(answer: string): string {
  return answer.toLowerCase().replace(/[^a-z0-9]/g, '');
}

export function isAcceptedAnswer(puzzle: Puzzle, answer: string): boolean {
  const normalized = normalizeAnswer(answer);
  return normalized.length > 0 && puzzle.acceptedAnswers.some((value) => normalizeAnswer(value) === normalized);
}

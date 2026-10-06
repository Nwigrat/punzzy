import type { ImageSourcePropType } from 'react-native';

export type Puzzle = {
  id: string;
  image: ImageSourcePropType;
  clue: string;
  acceptedAnswers: readonly string[];
  hints: readonly string[];
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
];

export function normalizeAnswer(answer: string): string {
  return answer.toLowerCase().replace(/[^a-z0-9]/g, '');
}

export function isAcceptedAnswer(puzzle: Puzzle, answer: string): boolean {
  const normalized = normalizeAnswer(answer);
  return normalized.length > 0 && puzzle.acceptedAnswers.some((value) => normalizeAnswer(value) === normalized);
}

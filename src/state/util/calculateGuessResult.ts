import { isEqual } from 'lodash';

export type MastermindCharacterKey =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j';

export type GuessResultKey = 'x' | '-' | ' ';

export type GuessResult = {
  solved: boolean;
  result: GuessResultKey[];
};

function calculateGuessResult(params: {
  answer: MastermindCharacterKey[];
  guess: MastermindCharacterKey[];
}): GuessResult {
  const { answer, guess } = params;

  if (answer.length !== guess.length) {
    throw new Error(
      `params.guess.length = ${guess.length}, but answer.length = ${answer.length}`
    );
  }

  if (isEqual(guess, answer)) {
    return { solved: true, result: answer.map(() => 'x' as GuessResultKey) };
  }

  const answerTracker: string[] = answer.slice(0);
  const guessTracker: string[] = guess.slice(0);

  const result: GuessResultKey[] = [];

  answer.forEach((value, index) => {
    if (value === guess[index]) {
      result.push('x');
      answerTracker[index] = '';
      guessTracker[index] = '';
    }
  });

  answerTracker.forEach((value, index) => {
    if (!value) return;
    const guessIndex = guessTracker.findIndex(
      (guessValue) => guessValue === value
    );
    if (guessIndex < 0) return;
    result.push('-');
    answerTracker[index] = '';
    guessTracker[guessIndex] = '';
  });

  return {
    solved: false,
    result: [
      ...result,
      ...guessTracker
        .filter((value) => !!value)
        .map(() => ' ' as GuessResultKey),
    ],
  };
}

export default calculateGuessResult;

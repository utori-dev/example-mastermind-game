import calculateGuessResult, {
  MastermindCharacterKey,
} from './calculateGuessResult';

describe('calculateGuessResult', () => {
  describe(`given answer = ['a', 'b', 'a', 'c']`, () => {
    const answer: MastermindCharacterKey[] = ['a', 'b', 'a', 'c'];

    describe(`given guess = ['a', 'b', 'a', 'c']`, () => {
      const guess: MastermindCharacterKey[] = ['a', 'b', 'a', 'c'];

      it(`returns { solved: true, result: ['x', 'x', 'x', 'x'] }`, () => {
        expect(calculateGuessResult({ answer, guess })).toEqual({
          solved: true,
          result: ['x', 'x', 'x', 'x'],
        });
      });
    });

    describe(`given guess = ['a', 'd', 'b', 'b']`, () => {
      const guess: MastermindCharacterKey[] = ['a', 'd', 'b', 'b'];

      it(`returns { solved: true, result: ['x', '-', ' ', ' '] }`, () => {
        expect(calculateGuessResult({ answer, guess })).toEqual({
          solved: false,
          result: ['x', '-', ' ', ' '],
        });
      });
    });

    describe(`given guess = ['b', 'a', 'c', 'a']`, () => {
      const guess: MastermindCharacterKey[] = ['b', 'a', 'c', 'a'];

      it(`returns { solved: true, result: ['-', '-', '-', '-'] }`, () => {
        expect(calculateGuessResult({ answer, guess })).toEqual({
          solved: false,
          result: ['-', '-', '-', '-'],
        });
      });
    });

    describe(`given guess = ['d', 'd', 'd', 'd']`, () => {
      const guess: MastermindCharacterKey[] = ['d', 'd', 'd', 'd'];

      it(`returns { solved: true, result: [' ', ' ', ' ', ' '] }`, () => {
        expect(calculateGuessResult({ answer, guess })).toEqual({
          solved: false,
          result: [' ', ' ', ' ', ' '],
        });
      });
    });

    describe(`given guess = ['d', 'd', 'd', 'd', 'a', 'a']`, () => {
      const guess: MastermindCharacterKey[] = ['d', 'd', 'd', 'd', 'a', 'a'];

      it(`throws error`, () => {
        expect(() => calculateGuessResult({ answer, guess })).toThrowError();
      });
    });
  });
});

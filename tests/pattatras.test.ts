import _ from "lodash";
import { describe, expect, test } from "vitest";
import { returnCorrectMessage } from "../src/print-correct-message.ts";
import { MESSAGES } from "../types/index.ts";
const { range, shuffle } = _;

const shuffledRangeOfNumber = shuffle(range(1, 6457));

/**
 * We want to generate the values to be tested instead of writing them
 * manually, so for each dataset we filter out anything that's not wanted
 */
describe("Testing Multiples", () => {
  test("If the number is a multiple of 3, print 'Patte'", () => {
    const multiplesOf3 = shuffledRangeOfNumber.filter(
      (multiple) => multiple % 3 === 0 && multiple % 5 !== 0,
    );
    multiplesOf3.forEach((multiple) => {
      expect(returnCorrectMessage(multiple)).eq(MESSAGES.PATTE);
    });
  });

  test("If the number is a multiple of 5, print 'Tatras'", () => {
    const multiplesOf5 = shuffledRangeOfNumber.filter(
      (multiple) => multiple % 5 === 0 && multiple % 3 !== 0,
    );
    multiplesOf5.forEach((multiple) => {
      expect(returnCorrectMessage(multiple)).eq(MESSAGES.TATRAS);
    });
  });

  test("If the number is a multiple of 3 and 5, print 'Pattatras'", () => {
    const multiplesOf5 = shuffledRangeOfNumber.filter(
      (multiple) => multiple % 5 === 0 && multiple % 3 === 0,
    );
    multiplesOf5.forEach((multiple) => {
      expect(returnCorrectMessage(multiple)).eq(MESSAGES.PATTATRAS);
    });
  });

  test("If the number is neither a multiple of 3 or 5 or both, print the number", () => {
    shuffledRangeOfNumber.forEach((number) => {
      if (number % 5 !== 0 && number % 3 !== 0) {
        expect(returnCorrectMessage(number)).eq(number);
      }
    });
  });
});

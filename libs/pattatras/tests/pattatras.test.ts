import _ from "lodash";
import { beforeAll, describe, expect, test } from "vitest";
import { MESSAGES, returnCorrectMessage } from "../src/index";

const { range, shuffle } = _;

/**
 * Feature Test
 */
describe("Testing Multiples", () => {
	let shuffledRangeOfNumber: number[];
	let multiplesOf3: number[];
	let multiplesOf5: number[];
	let multiplesO3And5: number[];

	beforeAll(() => {
		/**
		 * We want to generate the values to test against instead of writing them
		 * manually, so for each dataset we filter out anything that's not wanted
		 */
		shuffledRangeOfNumber = shuffle(range(1, 6457));
		multiplesOf3 = shuffledRangeOfNumber.filter(
			(multiple) => multiple % 3 === 0 && multiple % 5 !== 0,
		);
		multiplesOf5 = shuffledRangeOfNumber.filter(
			(multiple) => multiple % 5 === 0 && multiple % 3 !== 0,
		);
		multiplesO3And5 = shuffledRangeOfNumber.filter(
			(multiple) => multiple % 5 === 0 && multiple % 3 === 0,
		);
	});

	test("If the number is a multiple of 3, print 'Patte'", () => {
		multiplesOf3.forEach((multiple) => {
			expect(returnCorrectMessage(multiple)).eq(MESSAGES.PATTE);
		});
	});

	test("If the number is a multiple of 5, print 'Tatras'", () => {
		multiplesOf5.forEach((multiple) => {
			expect(returnCorrectMessage(multiple)).eq(MESSAGES.TATRAS);
		});
	});

	test("If the number is a multiple of 3 and 5, print 'Pattatras'", () => {
		multiplesO3And5.forEach((multiple) => {
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

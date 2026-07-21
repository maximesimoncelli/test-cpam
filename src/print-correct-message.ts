import { MESSAGES, type MessagesValues } from "../types/index.js";

/**
 * If `currentNumber` is a multiple of 3, returns "Patte"
 *
 * If `currentNumber` is a multiple of 5, returns "Tatras"
 *
 * If `currentNumber` is a multiple of 3 and 5, returns "Pattatras"
 *
 * Any other value should return the value
 * @param currentNumber number
 * @returns MessagesValues | number
 */
export function returnCorrectMessage(
	currentNumber: number,
): MessagesValues | number {
	if (currentNumber % 3 === 0 && currentNumber % 5 !== 0) {
		return MESSAGES.PATTE;
	} else if (currentNumber % 5 === 0 && currentNumber % 3 !== 0) {
		return MESSAGES.TATRAS;
	} else if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
		return MESSAGES.PATTATRAS;
	} else {
		return currentNumber;
	}
}

import { MESSAGES, type MessagesValues } from "./types/pattatras.js";

/**
 * Execute the pattatras program on an array of numbers and returns it formatted in an array of objects containing the number and the message
 */
export function pattatrasObjectPresenter(shuffledRangeOfNumber: number[]): {
  number: number;
  message: string | number;
}[] {
  return shuffledRangeOfNumber.map((currentNumber) => ({
    number: currentNumber,
    message: returnCorrectMessage(currentNumber),
  }));
}

/**
 * The main features of this program is as follows:
 *
 * Given a range of randomly arranged numbers between 1 and 6457 included
 * When we iterate over this range of numbers, for each number multiple of 3
 * Then we print "Patte" to the console
 *
 * Given a range of randomly arranged numbers between 1 and 6457 included
 * When we iterate over this range of numbers, for each number multiple of 5
 * Then we print "Tatras" to the console
 *
 * Given a range of randomly arranged numbers between 1 and 6457 included
 * When we iterate over this range of numbers, for each number both a multiple of 5 and 3
 * Then we print "Pattatras" to the console
 *
 * Given a range of randomly arranged numbers between 1 and 6457 included
 * When we iterate over this range of numbers, for each number than is neither a multiple of 3 or 5
 * Then we print the number to the console
 *
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

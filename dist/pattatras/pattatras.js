import { returnCorrectMessage } from "./print-correct-message.js";
export function pattatras(shuffledRangeOfNumber) {
    shuffledRangeOfNumber.forEach((currentNumber) => {
        console.log(`Number ${currentNumber}: ${returnCorrectMessage(currentNumber)}`);
    });
    return shuffledRangeOfNumber.map((currentNumber) => ({
        number: currentNumber,
        message: returnCorrectMessage(currentNumber),
    }));
}

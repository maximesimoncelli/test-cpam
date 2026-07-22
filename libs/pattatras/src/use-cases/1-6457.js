import _ from "lodash";

const { range, shuffle } = _;
/**
 *
 * @returns number[]
 */
export function shuffledRangeOfNumber() {
	return shuffle(range(1, 6458));
}

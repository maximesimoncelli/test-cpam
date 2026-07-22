import _ from "lodash";
const { range, shuffle } = _;
/**
 *
 * @returns number[]
 */
export function shuffledRangeOfNumber(): number[] {
  return shuffle(range(1, 6458));
}

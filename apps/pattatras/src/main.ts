/**
 * The main features of this program is as follows:
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
 */

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pattatras } from "./pattatras.js";
import { shuffledRangeOfNumber } from "./use-cases/1-6457.js";

const OUTPUTS = {
  OUTPUTS_DIR: "./outputs",
  FILENAME: "pattatras.csv",
};

if (!existsSync(resolve(OUTPUTS.OUTPUTS_DIR))) {
  mkdirSync(resolve(OUTPUTS.OUTPUTS_DIR));
}

writeFileSync(
  resolve(OUTPUTS.OUTPUTS_DIR, OUTPUTS.FILENAME),
  ["Number,Message", pattatras(shuffledRangeOfNumber())].join("\n"),
  "utf8",
);

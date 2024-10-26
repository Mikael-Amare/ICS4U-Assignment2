/*
 * Given a string, returns the length of
 *  the largest run in the string.
 * A "run" is a series of zero or
 *  more adjacent characters that are the same.
 * @author  Mikael Amare
 * @version 1.0
 * @since   2024-10-26
 */

function maxRun(str: string): number {
    if (str.length === 0) return 0;

    let maxRun = 1; // At least one character in a run
    let currentRun = 1;

    for (let counter = 1; counter < str.length; counter++) {
        if (str.charAt(counter) === str.charAt(counter - 1)) {
            currentRun++;
        } else {
            maxRun = Math.max(maxRun, currentRun);
            currentRun = 1; // Reset the current run count for the new character
        }
    }

    return Math.max(maxRun, currentRun); // Final comparison to account for end of string
}
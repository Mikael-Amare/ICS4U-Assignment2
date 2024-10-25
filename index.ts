/*
 * /*
 * Given a string, returns the length of
 *  the largest run in the string.
 * A "run" is a series of zero or
 *  more adjacent characters that are the same.
 * @author  Mikael Amare
 * @version 1.0
 * @since   2024-10-18
 */

function maxRun(str: string): number {
    if (str.length === 0) return 0;

    let maxRun = 1;
    let currentRun = 1;

    for (let counter = 1; counter < str.length; counter++) {
        if (str[counter] === str[counter - 1]) {
            currentRun++;
        } else {
            maxRun = Math.max(maxRun, currentRun);
            currentRun = 1;
        }
    }

    return Math.max(maxRun, currentRun); // Final comparison to account for end of string
}

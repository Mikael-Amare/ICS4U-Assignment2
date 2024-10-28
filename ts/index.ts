/*
 * Given a string, returns the length of
 * the largest run in the string.
 * A "run" is a series of zero or
 * more adjacent characters that are the same.
 * @author  Mikael Amare
 * @version 1.0
 * @since   2024-10-26
 */

async function getUserInputAndCalculateRun() {
    const str = prompt("Enter a string: ");
    if (str !== null) {
        const longestRun = maxRun(str);
        console.log(`The length of the longest run is: ${longestRun}`);
    } else {
        console.log("No input provided.");
    }
}

/*
 * Given a string, returns the length of
 * the largest run in the string.
 * A "run" is a series of zero or
 * more adjacent characters that are the same.
 * @author  Mikael Amare
 * @version 1.0
 * @since   2024-10-26
 */

import { createPrompt } from 'bun-promptx'

function maxRun(str: string): number {
    let maxRunLength = 0
    let currentRunLength = 1

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            currentRunLength++
        } else {
            maxRunLength = Math.max(maxRunLength, currentRunLength)
            currentRunLength = 1
        }
    }

    return Math.max(maxRunLength, currentRunLength)
}

async function getUserInputAndCalculateRun() {
    const str = await prompt("Enter a string: ")
    if (str !== null) {
        const longestRun = maxRun(str)
        console.log(`The length of the longest run is: ${longestRun}`)
    } else {
        console.log("No input provided.")
    }
}

// Call the function to run it
getUserInputAndCalculateRun()

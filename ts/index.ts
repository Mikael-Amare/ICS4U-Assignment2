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

function runCalculations (): void {
  const str = createPrompt('Enter a string: ') as string | null
  if (str !== null) {
    const longestRun = maxRun(str)
    console.log(`The length of the longest run is: ${longestRun}`)
  } else {
    console.log('No input provided.')
  }
}


function maxRun (str: string): number {
  let maxRunLength = 0
  let currentRunLength = 1

  for (let counter = 1; counter < str.length; counter++) {
    if (str[counter] === str[counter - 1]) {
      currentRunLength++
    } else {
      maxRunLength = Math.max(maxRunLength, currentRunLength)
      currentRunLength = 1
    }
  }

  return Math.max(maxRunLength, currentRunLength)
}
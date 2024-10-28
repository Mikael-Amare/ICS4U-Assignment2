/*
 * Main class to find the length of the largest run in a string.
 * A "run" is a series of zero or more adjacent characters that are
 * the same. This program prompts the user to enter a string, then
 * calculates the length of the largest run.
 * 
 * @author  Mikael Amare
 * @version 1.0
 * @since   2024-10-26
 */

import java.util.Scanner;

public static void Main { // Marking class as final to address Checkstyle warning

    // Private constructor to prevent instantiation of utility class
    private Main() {
        throw new UnsupportedOperationException("Utility class");
    }

    /**
     * Main method to execute the program.
     * 
     * @param args the command-line arguments (not used)
     */
    public static void main(final String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt user to enter a string
        System.out.print("Enter a string to find the largest run: ");
        String input = scanner.nextLine();

        // Call maxRun function and display result
        int result = maxRun(input);
        System.out.println("The length of the largest run is: " + result);

        scanner.close();
    }

    /**
     * Given a string, returns the length of the largest run in the string.
     * 
     * @param str the input string
     * @return the length of the largest run
     */
    public static int maxRun(final String str) {
        if (str.length() == 0) {
            return 0;
        }

        int maxRun = 1;
        int currentRun = 1;

        for (int counter = 1; counter < str.length(); counter++) {
            if (str.charAt(counter) == str.charAt(counter - 1)) {
                currentRun++;
            } else {
                maxRun = Math.max(maxRun, currentRun);
                currentRun = 1;
            }
        }
        return Math.max(maxRun, currentRun);
    }
}}

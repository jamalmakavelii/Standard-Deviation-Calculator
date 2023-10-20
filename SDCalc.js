import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class StandardDeviationCalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Double> numbers = new ArrayList<>();

        System.out.println("Enter a list of numbers separated by spaces (e.g., 1.0 2.0 3.0):");
        String input = scanner.nextLine();
        scanner.close();

        String[] numberStrings = input.split(" ");
        for (String numStr : numberStrings) {
            try {
                double num = Double.parseDouble(numStr);
                numbers.add(num);
            } catch (NumberFormatException e) {
                System.err.println("Invalid input: " + numStr);
            }
        }

        if (numbers.isEmpty()) {
            System.out.println("No valid numbers entered. Exiting.");
            return;
        }

        double mean = calculateMean(numbers);
        double standardDeviation = calculateStandardDeviation(numbers, mean);

        System.out.println("Mean: " + mean);
        System.out.println("Standard Deviation: " + standardDeviation);
    }

    public static double calculateMean(List<Double> numbers) {
        double sum = 0;
        for (double num : numbers) {
            sum += num;
        }
        return sum / numbers.size();
    }

    public static double calculateStandardDeviation(List<Double> numbers, double mean) {
        double sumSquaredDeviations = 0;
        for (double num : numbers) {
            double deviation = num - mean;
            sumSquaredDeviations += deviation * deviation;
        }
        double variance = sumSquaredDeviations / numbers.size();
        return Math.sqrt(variance);
    }
}
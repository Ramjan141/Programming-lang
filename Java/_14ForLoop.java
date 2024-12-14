
import java.util.*;

public class _14ForLoop {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            System.out.println("hello world");
        }
        // Print Stars
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        Scanner sc = new Scanner(System.in);
        // for (int i = 0;; i++) {
        // System.out.print("Enter Number : ");
        // int num = sc.nextInt();
        // if (num % 10 == 0) {
        // System.out.println("Multiple of 10");
        // break;
        // }
        // }

        // Check Prime or Not
        int num = 18;
        boolean isPrime = true;
        for (int i = 2; i < Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime == false) {
            System.out.println("Not Prime");
        } else {
            System.out.println("Prime");
        }
    }// Main
}

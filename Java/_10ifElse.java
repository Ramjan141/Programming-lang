
public class _10ifElse {
    public static void main(String[] args) {
        // if-else----------------------------->
        int age = 22;

        if (age > 18) {
            System.out.println("You can vote");
        } else {
            System.out.println("You can't Vote");
        }

        // Print the Largest of 2----->
        int a = 5;
        int b = 9;

        if (a > b) {
            System.out.println(a + " is Greater");
        } else {
            System.out.println(b + " is Greater");
        }

        // Print if a number is Odd or Even----->
        int num = 4;
        if (num % 2 == 0) {
            System.out.println("Even");
        } else {
            System.out.println("Odd");
        }

        // Else-if statement------------------->
        if (age >= 18) {
            System.out.println("adult");
        } else if (age >= 13 && age <= 18) {
            System.out.println("teenager");
        } else {
            System.out.println("child");
        }

        // Income Tax Calculator
        int income = 5000000;

        if (income < 500000) {
            System.out.println("Tax is 0");
        } else if (income >= 500000 && income < 1000000) {
            System.out.println("20% Tax : " + (income / 100) * 20);
        } else {
            System.out.println("30% Tax : " + (income / 100) * 30);
        }

        // Print Largest of 3 Number
        int x = 5;
        int y = 22;
        int z = 2;

        if ((x > y) && (x > z)) {
            System.out.println(x);
        }
        else if((y > z)){
            System.out.println(y);
        }
        else{
            System.out.println(z);
        }
    }

}
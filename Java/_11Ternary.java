
// variable = condition ? statement1 : statement2;

public class _11Ternary {
    public static void main(String[] args) {
        // Largest of 2
        int larger = (5 > 3) ? 5 : 3;
        System.out.println(larger);

        // Odd or Even
        int num = 4;
        String type = (num % 2 == 0) ? "Even" : "Odd";
        System.out.println(type);


        // If a student pass or fail
        int marks = 33;
        String report = (marks >= 33) ? "pass" : "fail";
        System.out.println(report);
    }
}

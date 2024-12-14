
// Symbols that tells compiler to perform some operation

// Arithmetic Operators (Binary/Unary)----->
// Binary -> (+ , - , * , / , %)
// Unary  -> (++ , --)

// Relational Operators----->
// (== , != , > , < , >= , <=)

// Logical Operators
// (&& , || , !)

// bitwise Operators----->

// Assignment Operators----->
// (= , += , -= , *= , /=)

public class _9operators {
    public static void main(String[] args) {
        int a = 50;
        int b = 10;
        // Binary Operator--->
        System.out.println("Binary----->");
        System.out.println(a + b);
        System.out.println(a - b);
        System.out.println(a * b);
        System.out.println(a / b);
        System.out.println(a % b);

        // Unary Operator--->
        System.out.println("Unary----->");
        System.out.println(a++);// post increment
        System.out.println(++a);// pre increment

        System.out.println(b--);
        System.out.println(--a);

        // Relational Operator--->
        System.out.println("Relational----->");
        System.out.println(a == b);
        System.out.println(a != b);
        System.out.println(a > b);
        System.out.println(a < b);
        System.out.println(a >= b);
        System.out.println(a <= b);

        // Logical Operator--->
        System.out.println("Logical----->");
        System.out.println((3 > 2) && (5 > 0));
        System.out.println((3 > 2) || (5 > 0));
        System.out.println(!(3 > 2));

    }
}

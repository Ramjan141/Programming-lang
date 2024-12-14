
// There are Two Types of Data.
//  1) Primitive               2) Non-Primitive
//      byte                          String
//      short                         Array
//      char                          Class
//      boolean                       Object
//      int                           Interface
//      long
//      float
//      double

// -> These are the Data Types in Java.

public class _3dataTypes {
    public static void main(String[] args) {
        byte a = 8; // it stores (integer) upto [-128 - +127] numbers.  (1 bytes)
        System.out.println(a);

        char b = 'a'; // it stores single character.  (2 bytes)
        System.out.println(b);

        boolean c = true; // It stores true or false. (1 bytes)
        System.out.println(c);

        float price  = (float) 15.5;// It stores Decimal Value
        System.out.println(price);

        int num = 10;// It stores only Integers upto [-2B - +2B] (4 bytes)
        System.out.println(num);

        short s = 244; // (2 bytes)
        System.out.println(s);

        long l = 22;// It stores large integer value (8 bytes)
        System.out.println(l);

        double d = 54.4;// It stores large float value (8 bytes)
        System.out.println(d);


    }
}

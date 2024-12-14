
// next
// nextLine
// nextInt
// nextByte
// nextFloat
// nextDouble
// nextBoolean
// nextShort
// nextLong

import java.util.*;

public class _5inputs {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // String name = sc.next();// This input function takes upto spaces.
        // System.out.println(name);
        
        String name2 = sc.nextLine();// This input function includes spaces.
        System.out.println(name2);

        int num = sc.nextInt();// It takes integer values.
        System.out.println(num);

        float price = sc.nextFloat();
        System.out.println(price);

        
    }
}

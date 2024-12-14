
public class _13whileLoop {
    public static void main(String[] args) {
        int i = 0;
        while (i < 5) {
            System.out.println("Hello world");
            i++;
        }

        i = 1;
        int n = 10;
        while (i <= n) {
            System.out.print(i + " ");
            i++;
        }

        // Print sum of n Natural Numbers
        i = 1;
        n = 5;
        int count = 0;
        while (i <= n) {
            count += i;// count = count + 1
            i++;
        }
        System.out.println("Sum : " + count);

        // Reverse a Number ------------->
        int num = 66492;
        while (num > 0) {
            int lastDigit = num % 10;
            System.out.print(lastDigit);
            num = num / 10;
        }
        System.out.println();
        
        // OR--->

        num = 99037;
        int rev = 0;;
        while (num > 0) {
            int lastDigit = num % 10;
            rev = (rev * 10) + lastDigit;
            num = num / 10;
        }
        System.out.println(rev);
    }//Main
}

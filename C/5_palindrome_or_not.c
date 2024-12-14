#include <stdio.h>

int main()
{
    int original, remainder, n, reserved = 0;
    printf("Enter Number to check palindrome or not\n");
    scanf("%d", &n);
    original = n;

    while (n != 0)
    {
        remainder = n % 10;
        reserved = reserved * 10 + remainder;
        n = n / 10;
    }
    if (original == reserved)
        printf("%d is a palindrome", original);
    else
        printf("%d is not a palindrome", original);
    return 0;
}
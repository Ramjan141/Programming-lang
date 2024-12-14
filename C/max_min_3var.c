// This program is to find maximum and minimum of given three numbers
#include <stdio.h>

int main()
{
    int a, b, c, max, min;

    printf("Enter Three Number");
    scanf("%d %d %d", &a, &b, &c);

    max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
    min = (a < b) ? (a < c ? a : c) : (b < c ? b : c);

    printf("Max Number is: %d\n", max);
    printf("Min number is: %d", min);

    return 0;
}
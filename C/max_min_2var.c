#include <stdio.h>

int main()
{
    int a, b, max, min;

    printf("Enter two digit Number");
    scanf("%d %d", &a, &b);

    max = (a > b) ? a : b;
    min = (a < b) ? a : b;

    printf("Max Number is: %d\n", max);
    printf("Min number is: %d", min);

    return 0;
}
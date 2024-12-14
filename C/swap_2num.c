// This program is to Swap two numbers without using 3rd Variable
#include <stdio.h>

int main()
{
    int a, b;
    printf("Enter two Numbers");
    scanf("%d %d", &a, &b);
    printf("Before Swap a = %d and b = %d\n", a, b);

    a = a + b;
    b = a - b;
    a = a - b;

    printf("After Swap a = %d and b = %d", a, b);

    return 0;
}
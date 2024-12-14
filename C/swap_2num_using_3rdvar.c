// This program is to Swap two numbers with using 3rd variable
#include <stdio.h>

int main()
{
    int a, b, c;
    printf("Enter two Numbers");
    scanf("%d %d", &a, &b);
    printf("Before Swap a = %d and b = %d\n", a, b);

    c = a;
    a = b;
    b = c;

    printf("After Swap a = %d and b = %d", a, b);

    return 0;
}
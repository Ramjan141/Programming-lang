// This program is to check wheather the number is entered by user is even or odd using if-else
#include <stdio.h>

int main()
{
    int a;
    printf("Enter number");
    scanf("%d", &a);

    if (a % 2 == 0)
    {
        printf("number is even");
    }
    else
    {
        printf("Number is odd");
    }

    return 0;
}
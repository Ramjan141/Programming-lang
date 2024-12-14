// This program is to check wheather the number is prime or not
#include <stdio.h>

int main()
{
    int num, i, c = 0;
    printf("Enter Number");
    scanf("%d", &num);

    for (i = 1; i <= num; i++)
    {
        if (num % i == 0)
        {
            c++;
        }
    }
    if (c == 2)
    {
        printf("%d is a prime number", num);
    }
    else
    {
        printf("%d is not a prime number", num);
    }

    return 0;
}
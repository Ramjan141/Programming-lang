// This program is to check the fibonacci series in a range given by user using do-while loop
#include <stdio.h>

int main()
{
    int i, num, sum, calc;
    printf("Enter Number\n");
    scanf("%d", &num);

    for (i = 1; i <= num; i++)
    {
        calc = i * i + 1;
        printf("%d\n", calc);
        sum = sum + calc;
    }
    printf("sum = %d\n", sum);

    return 0;
}
// This program is to check the series of 2+5+10+17+....upto n terms
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
    }
    return 0;
}
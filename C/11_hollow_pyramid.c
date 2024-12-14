#include <stdio.h>

int main()
{
    int i, s, rows, star = 0;

    printf("Enter Number of Rows\n");
    scanf("%d", &rows);

    for (i = 0; i < rows - 1; i++)
    {
        for (s = 1; s < rows - i; s++)
        {
            printf(" ");
        }
        for (star = 0; star <= 2 * i; star++)
        {
            if (star == 0 || star == 2 * i)
                printf("*");
            else
                printf(" ");
        }
        printf("\n");
    }
    for (i = 0; i < 2 * rows - 1; i++)
    {
        printf("*");
    }

    return 0;
}
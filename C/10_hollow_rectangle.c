#include <stdio.h>

int main()
{
    int i, j, rows, columns;

    printf("Enter Rows\n");
    scanf("%d", &rows);

    printf("Enter Columns\n");
    scanf("%d", &columns);

    for (i = 1; i <= rows; i++)
    {
        for (j = 1; j <= columns; j++)
        {
            if (i == 1 || i == rows || j == 1 || j == columns)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
       printf("\n");
    }

    return 0;
}
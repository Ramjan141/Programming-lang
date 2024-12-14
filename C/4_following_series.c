// Write a Program to find the following series. S=1+(1+2)+(1+2+3)+........(1+2+3+.......+n)
#include <stdio.h>

int main()
{
    int i, j, n;
    printf("Enter the number\n");
    scanf("%d", &n);

    for (i = 1; i <= n; i++)
    {
        printf("(");
        for (j = 1; j <= i; j++)
        {
            printf("%d", j);
            if (j < i)
            
                printf("+");
            
            else if (j = i)
            
                printf(")");
        }
            if (i < n)
            
                printf("+");
            
            else if (i = n)
            
                printf(" ");
            
        
    }

    return 0;
}
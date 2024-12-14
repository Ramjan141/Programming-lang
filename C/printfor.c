# include<stdio.h>

int main()
{
    int r,c;
    printf("Enter row");
    scanf("%d", &r);
    
    for (int i = 0; i <= r; i++)
    {
        for (int j = 0; j <=i; j++)
        {
            printf("%d  ", j);
        }
        printf("\n");
    }
    
    return 0;
}
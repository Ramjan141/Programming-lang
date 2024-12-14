# include<stdio.h>

int main()
{
    int a,i=1,j;
    printf("Enter Line");
    scanf("%d", &a);

    while(i<=a)
    {
        j=1;
        while(j<=i)
    {
        printf("+");
        j++;
    }
    printf("\n");
    i++;
    }

    return 0;
}
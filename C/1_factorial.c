// Write a program to find the factorial of a given integer n 
# include<stdio.h>

int main()
{
    int n,i,fact=1;
    printf("Enter Number");
    scanf("%d", &n);

    for(i=1;i<=n;i++)
    {
        fact=fact*i;
    }
        printf("\n%d", fact);
    return 0;
}
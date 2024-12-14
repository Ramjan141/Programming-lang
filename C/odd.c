// This prgram is to Show even numbers
# include<stdio.h>

int main()
{
    int num, a=1,b,i;
    printf("Enter Number");
    scanf("%d", &num);

    for (i=1;i<=num;i++)
    {
        printf("%d\n", a);
        a=a+2;

    }
    return 0;
}
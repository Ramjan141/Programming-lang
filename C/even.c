// This prgram is to Show odd numbers upto n terms
#include <stdio.h>

int main()
{
    int num, a=2, i;
    printf("Enter Number");
    scanf("%d", &num);

    for (i = 1; i <= num; i++)
    {
        printf("%d\n", a);
        a=a+2;
    }
    return 0;
}
// Write a program to print all Armstrong number between the range 1 to 1000
#include<stdio.h>

int main()
{
    int i,n,num,r,sum=0;
    printf("Enter the Range");
    scanf("%d", &num);

    printf("\n Armstrong numbers are :\n");

    for(i=1;i<num;i++)
    {
        sum=0;
        n=i;
        
        while(n!=0)
        {
            r=n%10;
            sum=sum+(r*r*r);
            n=n/10;
        }
        if (i==sum)
        {
            printf("%d\n", i);
        }
        
    }
    return 0;
}
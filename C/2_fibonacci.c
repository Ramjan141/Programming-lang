// Write a program to print n Fibonacci numbers (0,1,1,2,3,5,8,13,.......,n)
# include<stdio.h>

int main() {
    int i=1,n,f,f1,f2;
    printf("Enter Number for Fibonacci Series\n");
    scanf("%d", &n);
    f=0;
    f1=1;
    f2=1;
        for(i;i<=n;i++)
        {
        f1=f2;
        f2=f;
        f=f1+f2;
        printf("%d\n", f);
        }
    return 0;
}
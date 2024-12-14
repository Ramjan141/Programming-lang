// This program is to check the fibonacci series in a range given by user using do-while loop
# include<stdio.h>

int main() {
    int i=1,n,f,f1,f2;
    printf("Enter Number for Fibonacci Series\n");
    scanf("%d", &n);
    f=0;
    f1=1;
    f2=1;
    do
    {
        printf("%d\n", f);
        f1=f2;
        f2=f;
        f=f1+f2;
        i++;
    }
    while(i<=n);
    return 0;
}
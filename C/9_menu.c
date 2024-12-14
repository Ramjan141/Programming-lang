// This program is to check the months in Alphabets using switch-case
# include<stdio.h>

int main()
{
    int optr,a,b;

printf("Select:\n 1.For Addition\n 2.For Subtraction\n 3.For Multiplication\n 4.For Division\n 5.For Square Root\n 6.Exit\n");
scanf("%d", &optr);
switch (optr)
{
case 1:
printf("Enter Number");
scanf("%d", &a);
printf("Enter Number");
scanf("%d", &b);
printf("Sum = %d", a+b);
break;

case 2:
printf("Enter Number");
scanf("%d", &a);
printf("Enter Number");
scanf("%d", &b);
printf("Sum = %d", a-b);
break;

case 3:
printf("Enter Number");
scanf("%d", &a);
printf("Enter Number");
scanf("%d", &b);
printf("Sum = %d", a*b);
break;

case 4:
printf("Enter Number");
scanf("%d", &a);
printf("Enter Number");
scanf("%d", &b);
printf("Sum = %d", a/b);
break;

case 5:
printf("Enter Number");
scanf("%d", &a);
printf("Sum = %d", a*a);
break;

case 6:
if(optr==6)
break;
default:
printf("\nTry Again! You Entered Wrong Keyword");

}
    return 0;
}
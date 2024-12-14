// This program is to calculate simple intrest
#include <stdio.h>

int main()
{
    int principal, rate, years;

    printf("Enter Principal");
    scanf("%d", &principal);

    printf("Enter Rate");
    scanf("%d", &rate);

    printf("Enter year");
    scanf("%d", &years);

    printf("The simpleintrest is %d", principal * rate * years / 100);
    return 0;
}
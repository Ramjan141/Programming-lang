// This program is to check the tax of a certain amount given using if-else
#include <stdio.h>

int main()
{
    float income, tax;
    printf("Enter Income");
    scanf("%f", &income);
    if (income >= 250000 && income <= 500000)
    {
        tax = tax + 0.05 * (income - 250000);
    }
    if (income >= 500000 && income <= 1000000)
    {
        tax = tax + 0.10 * (income - 500000);
    }
    if (income >= 1000000)
    {
        tax = tax + 0.20 * (income - 1000000);
    }
        printf("Your Total Tax is %f", tax);
    return 0;
}
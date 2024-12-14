// This program is to find wheather the entered year is leap or not
#include <stdio.h>

int main()
{
    int year;
    printf("Enter the year to check leap years or not");
    scanf("%d", &year);

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
    {
        printf("The Entered year is a Leap year.");
    }
    else
    {
        printf("The Entered year is not a Leap year.");
    }
    return 0;
}
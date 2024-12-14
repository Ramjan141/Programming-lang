// This program is to convert fahrenheit to celcius
#include <stdio.h>

int main()
{
    int farh, cel;
    printf("Enter Fahrenheit");
    scanf("%d", &farh);
    cel = ((farh - 32) * 5) / 9;
    printf("celcius is : %d", cel);

    return 0;
}
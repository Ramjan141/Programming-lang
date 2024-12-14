// This program is to find Area and Circumference of a circle
#include <stdio.h>

int main()
{
    float pi = 3.14, circumference, area, radius;
    printf("Enter Number for Area and Circumference");
    scanf("%f", &radius);

    area = pi * radius * radius;
    printf("Area = %f\n", area);

    circumference = 2 * pi * radius;
    printf("Circumference = %f", circumference);

    return 0;
}
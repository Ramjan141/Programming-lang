// This program is to find distance us the formula S=ut+(1/2)ft^2
#include <stdio.h>

int main()
{
    float u, f, t, s;

    printf("Enter U");
    scanf("%f", &u);

    printf("Enter F");
    scanf("%f", &f);

    printf("Enter T");
    scanf("%f", &t);

    s = (u * t) + ((f * t * t) / 2);

    printf("Distance = %f", s);
    return 0;
}
// This program is to find GCD and LCM
#include <stdio.h>

int main()
{
    int GCD, LCM, a, b, x, y, r;
    printf("Enter Two Numbers");
    scanf("%d %d", &x, &y);
    a = x;
    b = y;
    while (b != 0)
    {
        r = a % b;
        a = b;
        b = r;
    }
    GCD = a;
    LCM = (x * y) / GCD;
    printf("GCD of %d and %d = %d\n", x, y, GCD);
    printf("LCM of %d and %d = %d\n", x, y, LCM);

    return 0;
}
// This program is to check wheather the person is eligible for work or not using if-else
#include <stdio.h>

int main()
{
    int age;
    printf("Enter Age");
    scanf("%d", &age);

    if (age>=18)
    {
        printf("This person is eligible for work");
    }
    else
    {
        printf("This person is not eligibe for work");
    }
    return 0;
}
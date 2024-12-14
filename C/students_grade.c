// This program is to check wheather the student is pass or fail and also check the grades using if-else
#include <stdio.h>

int main()
{
    int Marks;
    printf("Enter Marks");
    scanf("%d", &Marks);
    if (Marks > 90 && Marks < 100)
    {
        printf("\nYour Marks is: %d and Grade is : A+", Marks);
    }
    else if (Marks >= 80 && Marks < 90)
    {
        printf("\nYour Marks is: %d and Grade is :A", Marks);
    }
    else if (Marks >= 70 && Marks < 80)
    {
        printf("\nYour Marks is: %d and Grade is :B+", Marks);
    }
    else if (Marks >= 60 && Marks < 70)
    {
        printf("\nYour Marks is: %d and Grade is :B", Marks);
    }
    else if (Marks >= 50 && Marks < 60)
    {
        printf("\nYour Marks is: %d and Grade is :C+", Marks);
    }
    else if (Marks >= 40 && Marks < 50)
    {
        printf("\nYour Marks is: %d and Grade is :C", Marks);
    }
    else
    {
        printf("Fail");
    }
    return 0;
}
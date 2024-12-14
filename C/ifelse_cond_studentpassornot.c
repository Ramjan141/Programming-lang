//This program is to check wheather the student is pass or not in exam using if-else
# include<stdio.h>

int main()
{
    int Physcis,chemistry,maths,sum;
    printf("Enter Mark's of physics");
    scanf("%d", &Physcis);
    printf("Enter Mark's of chemistry");
    scanf("%d", &chemistry);
    printf("Enter Mark's of maths");
    scanf("%d", &maths);
    sum = (maths+Physcis+chemistry)/3;
    if ((sum<40) || Physcis<33 || chemistry<33 || maths<33)
    {
        printf("The Student is failed and the percentage is %d", sum);
    }
        else
        {
        printf("The student is pass and the percentage is %d", sum);
    }
    return 0;
}
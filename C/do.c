# include<stdio.h>

int main()
{
    int a,i=1,j;
    printf("Enter Number");
    scanf("%d", &a);

    do{
        
        do{ 
            i++;
            printf("\n");
        }while(i<=a);
        j=1;
            do{
                printf("+");
                j++;
            }while(j<=a);


        
                
    }while(j!=a);
    
        
    return 0;
}
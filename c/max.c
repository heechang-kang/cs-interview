#include<stdio.h>

int find_max(int n1, int n2, int n3, int n4){
    int max1 = n1>n2 ? n1:n2;
    int max2 = n3>n4 ? n3:n4;
    return max1>max2 ? max1:max2;
}

int main() {
    printf("%d", find_max(1,2,3,4));
    return 0;
}


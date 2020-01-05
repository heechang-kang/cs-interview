#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int main(){

    char name[100];
    char *desc;

    strcpy(name, "heechang kang");

    // Dynamic allocation
    desc = malloc(200 * sizeof(char)); // calloc(200, sizeof(char));

    if(desc == NULL){
        fprintf(stderr, "unable to allocate memory\n");
    }else {
        strcpy(desc, "heechang kang is my Korean name");
    }
    // reallocating
    // desc = realloc( description, 100*sizeof(100))

    printf("\nmy name is %s\n", name);
    printf("desc : %s\n\n", desc);

    free(desc);
}
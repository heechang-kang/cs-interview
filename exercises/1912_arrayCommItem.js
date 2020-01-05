
// FIRST 
// O(n^2), O(arr1 * arr2)
function containsCommonItem(arr11, arr12) {
    for(let i=0; i<arr1.length; i++){
        for (let j = 0; j < arr2.length; j++)
            if(arr1[i] === arr2[j]){
                return console.log(true);
            }
    }
    return console.log(false);
}


const array1 = [1,2,3,4,5];
const array2 = [6,7,8];
containsCommonItem(array1, array2);

// SECOND
// 
// arr21 ==> obj{ true, true} , compare

function containsCommonItem(arr1, arr2) {
    
}
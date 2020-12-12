//given two sorted arrays
function MergeSortedArrays(array1,array2){
    const mergedArray = []; //here the result array will be stored
    let i = 1,j = 1;
    if(array1.length===0){
        console.log(array2);
        return array2;
    }
    if(array2.length===0){
        console.log(array1);
        return array1;
    }
    let array1item = array1[0],array2item = array2[0];
    while(array1item || array2item){
        if(!undefined || array1item < array2item){
            mergedArray.push(array1item);
            array1item = array1[i];
            i++;
        }
        else{
            mergedArray.push(array2item);
            array2item = array2[j];
            j++;
        }
    }
    return mergedArray;
    }



console.log(MergeSortedArrays([2,6,10],[6,9,15]));
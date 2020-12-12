function sumOfDiffInArr(arr1,arr2){
    let diff,sum = 0;
    for(let i = 0; i < arr1.length & i < arr2.length; i++){
        diff = arr2[i]-arr1[i];
        sum += diff;
    }
    return sum;
}
console.log(sumOfDiffInArr([2,4,5,6],[10,23,18,20]));
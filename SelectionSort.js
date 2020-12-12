let numbers = [24,4,90283,76,84,490,6,827,11,6475];
function SelectionSort(arr){
for(let i=0;i<arr.length;i++){
    let minIndex = i;//set the first index as minimum
    for(let j = i; j < arr.length; j++){
        if(arr[j] < arr[minIndex]){
            minIndex = j;
        }
    }
    let temp = arr[i];//set the first element to temp
        arr[i]= arr[minIndex];
        arr[minIndex]= temp; 
}
return arr;
}
console.log(SelectionSort(numbers))
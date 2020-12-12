function simpleSort(list){
    return list.sort();
    //check the result 
    //that's not the result we expected right?
}
function realSort(list){
    //this is done under the help of ecmascript definition
    //for every data types the method will be differ check the javascript mdn site to know more
    return list.sort((a,b)=>a-b);
    //sort method receive the function which will take two numbers to compare that the numbers are larger or smaller
}




function BubbleSort(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 1; j < len-i; j++){
            if(arr[j] < arr[j-1]){
                let temp  =arr[j];
                arr[j] = arr[j-1];
                arr[j-1]= temp;
            }
        }
    }
    return arr;
}
console.log('The realsort example ',realSort([4,44,5,11,865,6,999,124,3432,451,733,9]));
console.log(BubbleSort([34,67,12,90,45,29,103,3848,234,9]));
module.export=BubbleSort;
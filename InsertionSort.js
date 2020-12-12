// Insertion Sort is working on the way of inserting the larger value before the smaller value;


let arrInput = [40,50,10,90,100,60,20];

const InsertionSort = (list) =>{
    for(let i = 1 ; i < list.length; i++){
        let current = list[i];
        let j = i-1;
        while(j >= 0 && list[j] > current){
            list[j+1] = list[j];
            j--;
        }
        list[j] = current;
    }
    return list;
} 

console.log(InsertionSort(arrInput));
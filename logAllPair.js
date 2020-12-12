// log all pairs of array

function logAllPair(arr){
    for(let f = 0; f < arr.length; f++){
        for(s = 0; s < arr.length ; s++){
            let a = arr[f];
            let b = arr[s];
            console.log(`{${a},${b}}`);
        }
    }
}
logAllPair([1,2,3,4,5]);


// big o analysis os this program is O(n*n) Multiplication is used if we have nested two for loops that is O(n^2)
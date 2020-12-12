function printAllNumbersSumAllPairs(arr){
    arr.forEach(num=>{
        console.log(num);
    });
    console.log('sum of every pairs in a array');
    arr.forEach(firstnumber=>{
        arr.forEach(secondNumber=>{
            console.log(firstnumber+secondNumber);
        })
    })
}
printAllNumbersSumAllPairs([1,2,3,4,5]);

//O(n+ n*n) remove constant  
//O(n^2);
//quadratic big o notation
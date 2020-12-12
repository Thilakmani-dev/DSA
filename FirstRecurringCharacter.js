function firstRecurringCharacter(arr){
const result = "No First recurring Character";
for(let first=0; first < arr.length; first++){ //O(n)
for(let second = first+1; second< arr.length ; second++){ //O(n)
    if(arr[first]=== arr[second]){
        return arr[first];
    }
}
}
return result;
}
//This function will have the time complexity of O(n^2)

console.log(firstRecurringCharacter([5,23,7,3,90,83,23,5]));




console.log(`The second function for firstrecurring character`);
function firstRecurringCharacter2(input){
    let map = {};
    for(let i = 0; i < input.length; i++){
        if(map[input[i]]!== undefined){
            return input[i];
        }
        else{
            map[input[i]] = i;
        }
        console.log(map);
    }
    
}
console.log(firstRecurringCharacter2([2,5,1,7,2,9,1]))
//the second function executes better in time complexity when comparing the second function with the first function

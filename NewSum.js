const numbers = [5, 6, 10, 2, 7];

function twoSum(input, target){
    let map = new Map();
    for(let i = 0; i < input.length; i++){
        map.set(input[i],i);
    }
    for(let j = 0; j < map.size; j++){
        let rem = target - numbers[j];
        console.log(rem)
        if(map.has(rem)){
            return [j, map.get(rem)]
        }
    }
    return [];
}

const result = twoSum(numbers, 7);
console.log(result);
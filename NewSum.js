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





//using single for loop and map
const numbers1 = [7, 2, 4, 10, 3];

function getTwoSum(nums, target) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      result[0] = i;
      result[1] = map.get(target - nums[i]);
    }
    map.set(nums[i], i);
  }
  return result;
}

console.log(getTwoSum(numbers1, 9)); // [3,1]

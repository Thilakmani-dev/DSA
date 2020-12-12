// given two arrays
//create a function that should return true if any common elements exists
//otherwise it should return false
//testcase
//const arr1 = ['google','facebook','amazon','netflix','apple']
//const arr2 = ['apple','samsung','redmi','oppo','vivo']
//return true as it have same item named apple

//code
//brute force approach
const checkCommonElem = (arr1,arr2) =>{
    arr1.forEach(elem1 => {
        arr2.forEach(elem2 =>{
            if(elem1 === elem2){
                console.log('true');
                return true;
            }
        })
    })
    console.log('false');
    return false;
}
//O(n*n) O)(n^2) 
//instead O(a*b)  - time complexity
//space complexity is O(1) we doesnt assign any external varibales


//normal function declaration instead of arrow function
function checkCommonElem2(firstArr,secondArr){
let mapObj = {};
//module the function of mapping the array to object
maptoObj(firstArr);//hoisted 
function maptoObj(arr){
    for(let i = 0; i < arr.length; i++){
        if(!mapObj[arr[i]]){
            mapObj[arr[i]] = true;
        }
    }
}

for(let j = 0; j < secondArr.length; j++){
    if(mapObj[secondArr[j]]){
        console.log('true');//a common element is found in arrays
        return true;
    }
}
console.log('false');//no common element in two arrays
return false;
}
//time complexity O(a + b)
//space complexity O(array1)


//welcome to the best and easy solution and best readable code for only developers and not for others


function commonEleinArr3(a1,a2){
return a1.some(element=>a2.includes(element));
}
//time complextity is not known
//but code is much smaller and readable for developers and not for others
//but a possible solution maybe an optimal one
checkCommonElem2(['google','facebook','amazon','netflix','apple'],['faceboo','samsung','redmi','oppo','vivo'])

const iscommonelement = commonEleinArr3(['thilak','siva','mani','vimal','sivasurya'],['yuvi','subash','nambi','srinath','vimal']);
console.log(iscommonelement);
const names = ['mani','vimal','vijay','nambi','surya'];
names[2]; //O(1)

//push operation it will push the element at the end of array
names.push('ko') //O(1)

//pop operation will pop out the element at the end of the array
names.pop(); //O(1)
//mani popped out
//push and pop will not iterate every element in the array



//shift & unshift will iterate every element as the first index causes every index changes
names.shift() //O(n) ---deletion O(n)
//unshift('element')
names.unshift('vishnu'); // -- insertin O(n) every index has to be changed for every elements in the array

//splice 
names.splice(2,0,'sivakumar') //Almost O(n)splice modifies the original array syntax
//splice(index,delete count,inserting element )


//slice will not modify the original array
let TopperNames = names.slice(2,5);
//slice(start,end)
//slice O(n)

//filter will filter out the elements based on the given condition
let poorGuys = names.filter(stu=>stu.length<6);
console.log(names);
console.log(`${TopperNames} are topppers`);
console.log(poorGuys);
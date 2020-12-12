const isPermutationString = (a,b) =>{
return a.split("").sort().join() === b.split("").sort().join();
}

let check1 = isPermutationString('thi','hit');
console.log(check1);
console.log(['t','h','i','l','a','k'].sort());
console.log([10,345,23,56,14,7843,49].sort((a,b)=>{return a-b}));
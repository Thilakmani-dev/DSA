function palindrome(n){
    let number = String(n)
    return number === number.split('').reverse().join('');
}
console.log(palindrome(101000000101))
//space complexity - O(1)
//time complexity - O(1)

function palindrome2(n){
    const temp = n;
let newnumber = 0,rem;
let flag;
while(n>0){
    rem = n%10 ;
    newnumber = (newnumber*10)+rem;
    n = n/10;
}
if(temp===newnumber){
    flag=true;
}
else{
    flag = false;
}
console.log(flag);
return flag;
}
palindrome2(202);
function reverseWords(str){
    let arr = str.split(" ");
    arr.reverse();
    arr.join(" ");
    return arr;
}

let name = "thilak mani dev";
let result = reverseWords(name);
console.log(result);
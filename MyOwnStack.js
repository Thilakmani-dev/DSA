class Stack{
    constructor(){
        this.size = 0;
        this.data = [];
    }
    push(element){
        this.data[this.size] = element;
        this.size++;
        console.log("Pushed element suxxessfully");
        return this.data[this.size-1];
    }
    pop(){
        let remElem = this.data[this.size-1];
        console.log("popped out successfully");
        delete this.data[this.size-1];
        this.size--;
        return remElem;
    }
    isEmpty(){
        return this.size===0;
    }
    peek(){
        let top = this.data[this.size-1];
        return top;
    }
}
/*
let newstack = new Stack();
newstack.push(10);
newstack.push(20);
newstack.push(30);
newstack.push(40);
newstack.push(50);
newstack.pop();
console.log(newstack);
console.log(newstack.isEmpty());
console.log(newstack.peek());
*/


let str = "((1+2)+2023)";

let exp = str.split("");
let expstack = new Stack();
for(let ch of exp){
    if(ch==='('){
        expstack.push('(');
    }
    if(ch===')'){
        if(expstack.isEmpty=='true'){
            return;
        }
        expstack.pop();
    }
}

console.log(expstack.isEmpty());
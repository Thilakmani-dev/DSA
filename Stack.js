class Stack{
    constructor(){
        this.size = 0;
        this.elements = [];
    }
    push(element){
        this.elements[this.size+1] = element;
        this.size +=1; 
        console.log('pushed successfully');
    }
    pop(){
        let top = this.elements[this.size-1];
        delete this.elements[this.size];
        console.log('removed successfully');
        this.size--;
        return top;
    }
    sizeOf(){
        console.log(this.size);
        return this.size;
    }
    isEmpty(){
        return this.size === 0;
    }
    peek(){
        return this.elements[this.size];
    }
}

let pages = new Stack();
pages.push(10);
pages.push(20);
pages.push(40);
pages.sizeOf();
pages.pop();
pages.sizeOf();
let isemptyPages  = pages.isEmpty();
console.log(isemptyPages);
let peekelementPages = pages.peek();
console.log(peekelementPages);
console.log(pages.elements);
pages.push(50);
let peekelementPages2 = pages.peek();
console.log(peekelementPages2);
console.log(pages.elements);

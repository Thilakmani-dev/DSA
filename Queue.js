class Queue{
    constructor(size){
        this.array = new Array(size);
        this.front = 0;
        this.rear;
    }
    enqueue(element){
        this.array[this.rear] = element;

    }
    dequeue(){
        let item = this.array[this.front];
        return item;
    }

}

var q = new Queue(5);
q.enqueue(30);
q.enqueue(50);
q.enqueue(60);
q.enqueue(90);
q.enqueue(100);
var last = q.dequeue();
console.log(q);
console.log(last);

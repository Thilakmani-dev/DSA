class MyArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }
    add(item,index){
        this.length++;
        for(let i = this.length-1; i >= index; i--){
        this.data[i] = this.data[i-1];  
        }
        this.data[index] = item;
    }
    delete(index){
        let item = this.data[index];
        this.shiftLeftItems(index);
    }
    shiftLeftItems(index){
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1];
            delete this.data[length-1];
            this.length--;
        } 
    }
}


let students = new MyArray();
students.push('vimal');
students.push('thilak');
students.push('nambi');
students.push('surya');
students.add('siva',2);
students.add('yuvi',3);
students.add('yogi',3);
students.delete(6);
console.log(students.get(2));
console.log(students);
//[0-a,1-b,2-c,3-d]
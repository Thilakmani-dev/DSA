class LinkedinList{
    constructor(value){
        this.head = {
            value:value,
            next:null
        }
        this.tail = this.head;
        this.length = 1;
    }
    //append operation to add the element at the last of the list
    append(value){
        this.head.next=value;
        this.tail = this.head.next;
        this.length++;
    }
}
const linkedinlist1 = new LinkedinList(10);
console.log(linkedinlist1);
class HashTable{
    constructor(size){
        this.data = new Array(size);
    }
    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash+ key.charCodeAt(i) * i)%this.data.length;
        }
        return hash;
        }
    set(key,value){
        let index = this._hash(key);
        this.data[index] = [key,value]; 
    }
    get(key){
        return this.data[key][value];
    }
}

const myHashMap = new HashTable(50);
myHashMap.set('grapes',10000);
console.log(myHashMap.get('grapes'));
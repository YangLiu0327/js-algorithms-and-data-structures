// queue, adding and removing => first in first out
// line
// uploading resources

let q = [];
q.push("first")
q.push("second")
q.push("third")
q.shift()
q.shift()
q.unshift("first")
q.unshift("second")
q.pop()
// console.log(q)

class Node  {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
   enqueue(val){
    var newNode = new Node(val);
    if(!this.first) {
        this.first = newNode;
        this.last = newNode;
    } else {
        this.last.next = newNode;
        this.last = newNode;
    }
    return ++this.size;
   }
   dequeue(){
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last) {
        this.last = null;
    }
    this.first = this.first.next;
    --this.size;
    return temp.value;
   }
}
var newQueue = new Queue;
newQueue.enqueue("first")
newQueue.enqueue("second")
console.log(newQueue.dequeue())
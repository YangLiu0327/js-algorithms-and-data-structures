// what is a linked list
// contains a head, tail and length
// each elements is node, node has a value and a pointer


// list no index, array has index in order
// link => collection of node
// insertion o(1), remove o(1) or o(n), searching o(n), access o(n) 
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// var first = new Node('hi')
// first.next = new Node('there')
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you')

class SingleLinkedFirst{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        // current初始化为列表的头
        var current = this.head;
        // newTail初始化为当前节点，用来跟踪新tail
        var newTail = current;
        // current.next 不是null的时候 才循环
        // 用于找到链表中的倒数第二个节点
        while(current.next) {
            newTail = current;
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        //返回被移除的节点
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unShift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val){
       var foundNode = this.get(index);
       if(foundNode) {
        foundNode.val = val;
        return true;
       }
       return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if (index === this.length){
           return !!this.push(val);
        };
        if (index === 0)  return !!this.unShift(val);
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }
    print(){
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next; 
        for(let i =0; i<this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
var list = new SingleLinkedFirst()
list.push('Hello')
// list.pop('Hello')
list.push('Goodbye')
list.push('!')
// list.unShift('me')
// console.log(list.set(0, 'hihi'))
// console.log(list.remove(0))
console.log(list.reverse())
console.log(list.print())
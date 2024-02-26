// stack 
// last in first out => remove from top
// react use stack to handle route histroy

// let stack = [];
// stack.push("google")
// stack.push("facebook")
// stack.push("youtube")

// // remove from end => pop()
// stack.pop()
// stack.push("amazon")

// // unshift to add at the beginning
// stack.unshift("create a new file")
// stack.unshift("resize file")
// // console.log(stack)


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        return temp.value;
    }
}

let newStack = new Stack;
newStack.push("hello")
console.log(newStack.pop())
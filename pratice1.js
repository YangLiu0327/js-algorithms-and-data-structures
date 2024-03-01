// single link, reverse link
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseLinkedList(head) {

   let prev = null;
   let curr = head;
   
   while(curr !== null){
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
   }
   return prev;
}


let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
console.log(reverseLinkedList(head));


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;

    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2;
    }
}


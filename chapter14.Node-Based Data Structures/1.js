//Node Based DS are build upon a single concept - the node.
//A node are pieces of data that may be dispersed throught the computer's memory.

const { createImportSpecifier } = require("typescript")




//Linked List
//the data from a linked list can be scattered across different cells throughout the computer's memory
/* 
    Connect data that is dispersed throughout memory are known as nodes.
    Each node represents an item in the list.

    => This is the key of th elinked list: each node also comes with a little extra information, namely, the memory address of the next node in the list. This extra piece of data is known as a link. The final node's link cotains null since linked list ends there.

    first node => head
    last node => tail

*/

class ListNode{
    constructor(data){
        this.data = data
        this.next = null
    }
}


class LinkedList{
    constructor(head = null){
        this.head = head
    }

    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst() {
        return this.head;
    }
}

let node1 =  new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2

let linkedList = new LinkedList(node1)

console.log(linkedList.head.next.data)

//Node Based DS are build upon a single concept - the node.
//A node are pieces of data that may be dispersed throught the computer's memory.


//Linked List
//the data from a linked list can be scattered across different cells throughout the computer's memory
/* 
    Connect data that is dispersed throughout memory are known as nodes.
    Each node represents an item in the list.

    => This is the key of the linked list: each node also comes with a little extra information, namely, the memory address of the next node in the list. This extra piece of data is known as a link. The final node's link cotains null since linked list ends there.

    first node => head
    last node => tail

*/


class Node{
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

let node1 =  new Node(2)
let node2 = new Node(5)
node1.next = node2

let linkedList = new LinkedList(node1)

/* 
    Whean daling  with a linked list, we only have inmediate access to its first node
    
    1.- Reading
    To get any node, we always need to start with the first node, and follow the chain of nodes until we reach the node we want
    BigO => O(N)

    2.- Searching 
    It takes O(N) steps to search for a value

    3.- Insertion
    This is the moment for the linked lists
    BigO => O(1) 
    WorstCase => O(N + 1)

    Each of these three operations are the oppositive in an array in terms of petformance:
    Scenario                    |       Array        |    LinkedList
    Inserting at the begining        Worst case           Best Case
    Inserting at the middle          Average Case         Average Case  
    Insert at the end                 Best Case           Worst Case   

    4.- Deletion
    Linked lists shine when it comes to deletion as well
    this takes O(1) steps when it's at the begining of the linked list 
    an in a worst case takes O(N) steps

    Efficiency of Linked List Operations
    Reading => O(N)
    Searching => O(N)
    Insertion => O(N) (O(1) at the beginning)
    Deletion => O(N) (O(1) at the beginning)
    
*/

//Queues

//First in, First Out => FIFO

//3 restrictions:
//1.- Data can be inserted only at the end of the queue
//2.- Data can be deleted only from the front  of the queue
//3.- Only the first element of a queue can be read

//Queues are also the perfect tool for handling asynchronous requests

//Enqueue: Adds an element to the back of the queue
//Dequeue: Removes an element from the front of the queue

class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.elements[this.head];
    }
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.length === 0;
    }
}
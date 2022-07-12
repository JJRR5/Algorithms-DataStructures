//Stacks and Queues
// They both handle temporary data and they're a tool to create elegant code

//Stack
//Three constraints: 
//1.- Data can be inserted only at the end of the stack
//2- Data can be deleted only from the end of the stack
//3.- Only the last element of a stack can be read

class Stack {
    constructor(){
        this.stack = []
    }
    push(value){
        this.stack.push(value)
    }
    pop(){
        return this.stack.pop()
    }
    read(){
        return this.stack[this.stack.length - 1]
    }
}

//A stack is an example of what is known as an abstract data type, it's kind of data strcutre that is a set of theorical rules that revovle around some other built-in data structure
function isOpen(character){
    return ["(","[","{"].includes(character)
}

function pair(ch1,ch2){
    let pairs = {"{":"}","[":"]","(":")"}
    return pairs[ch1] === ch2
};
    
function stack(str){
    let stack = []

    for(ch of str.split("")){
        if(isOpen(ch)){
            stack.push(ch)
        }
        else{
            let topStack = stack.pop()
            if(!pair(topStack, ch)){
                return false
            }
        }
    }
    return stack.length === 0
};

//We can prevent potential bugs when we use constrained data structures

//LIFO - Last In First Out

//1.- Queue
//2.- 4
//3.- 3

function reverse(phrase){
    let stack = []
    for(word of phrase.split("")){
        stack.push(word)
    }
    let string = ""
    
    while (stack.length > 0){
        string += stack.pop()
    }
    return string	
};
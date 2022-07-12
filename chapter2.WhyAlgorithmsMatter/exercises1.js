//How many steps would take it to perfomr a linear search for the number 8 in the following ordeed array? 
//answer = 4 setps
const arr = [2,4,6,8,10,12,13]

//How many steps would take it to perfomr a binary search for the number 8 
//answer = 1 step

//Whats the maximum number of steps it would take to perfomr a binary search on an array of size 100,000?
//asnwer = 16  
let size = 100


function steps(size){
    count = 0;
    while (size > 1){
        size = Math.floor(size / 2)
        count += 1
    }
    return Math.ceil(count) + 1
}
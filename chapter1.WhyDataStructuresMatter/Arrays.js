//Arrays
//Data structure Basic Operations
// Read, Search, Insert, Delete
//When we use a Read operations in arrays it can find it in one step for example
let array = [1,2,3]

console.log(array[0])

//Search is a world different from find, in search we look for an specefici element 
//in all the aray and it can take 1 to 1000 stepts to find it
const find = array.find(element => console.log(element))

//Insertion
//when we insert a new element into an array it will take 1 to 1000 stepts depending on the size of the array
//if we insert an element in the final postion of the array it will take 1 step
//if we insert an element at the begining or in the middle of the array it will take N+1 steps
array.push(4)

//Deletion is almost the same than insertion youre goin to delete the element that you choose and then you need to shift the next elements
array.pop()
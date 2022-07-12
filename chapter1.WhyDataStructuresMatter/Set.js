//Set 
// a set is a data structure that holds unique values
const set = new Set([1,2,3,4,5,6,7,8,9,10])

set.add(11)
set.has(1)
set.delete(9)

//One of the different features of a set is that when you want to add a new element it needs to review all the elements in the set and if the element you wanna add does not exist on it will add it

//The worst case scenario for a set is to insert an element at the begining of the set it will take 2N + 1 stepts to add the element
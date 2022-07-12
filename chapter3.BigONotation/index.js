//Big O Notation its a way to describe the complexity of an algorithm and data structures


//To expess in Big O Notation you have to ask yourself the "key question"
//For example if we want to express how many steps does it take to search for a value in an array on N elements we can say that: 
// O(N) Linear time complexity

//In other example to express how man stepts does it take to read an element from an array we can sa that it takes 1 step, and in O Big Notation would be: 
// O(1)
// this is considered as the fastest algorithm 

//What Big O Notation wants to show us is that the difference between a O(N) and a O(1) algorithm is that the O(N) algorithm is gonna take as many steps as the amount of elements and the O(1) algorithm is gonna take only 1 step no matter how many elements are, its a constant

//When we can express an algorithm in Big O Notation we neet to describe it with the worst case scenario , for example, if we are going to do linear search in an array, we need to say that thsi algorithm is a O(N) even if we found the element that we are looking for in the first position of an array

//For binary search we can say that it takes O(log N), this is beacasue for any algorithm that increases one step each time the data is doubled  its an Oh of log N

//O(log N) means the algorithm takes as many steps as it takes to keep halving the data elements until we remain with 1

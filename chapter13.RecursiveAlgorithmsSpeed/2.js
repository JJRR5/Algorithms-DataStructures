//The eficiency of Quicksort
//A partition funs in O(N) time

function quicksortProduct(arr){
    if(arr.length < 1){ return []}
    
    let left = []
    let right = []
    let pivot = arr[0]
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
        left.push(arr[i])
        }else{
        right.push(arr[i])
        }
    }

    return [].concat(quicksortProduct(left),pivot,quicksortProduct(right))
}

//The worst case scenario for Quicksort is one which the pivot always eends up on one side of the subarray instead of in the middle => O(N^2)

//The wors case scenario occurs when the arr is already sorted in an ascendent or descendent way

//Quicskort is the algorithm that most programming lenguages use under the hood for the sort funcitons, for example in js sort maybe uses quicksort 

//Quicksort is faster than Insertion Sort on an average case scenario 

//Quickselect

//Quickslect can be thought as a hybrid of Quicksort and binary search

//Efficiency => O(N) for average case scenarios


//We need to compare all the values in an array, and ordered them in an ascendent way, everytime we swap a value we need to make another pass-through to be sure that all the values are in the correct order
let arr = [4,2,7,1,3]

function bubbleSort(arr){
    let length = arr.length//4
    let sorted = false

    while (!sorted){
        sorted = true
        for(let i = 0; i < length ; i++){
            if (arr[i] > arr[i+1]){ 
                //if the first value is bigger than the second one this means that they are out of order, so we swap them
                let actual = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = actual;
                sorted = false
                //sorted is still false because we at least swap once
            }
        }
        length -= 1 // we delete the last position which is in the correct order, in this case we delete the seven first
    }
    return arr
}

//The bubble sort algorithm contains two significant kinds of steps 
//1. Comparasions
//2. Swaps

//In Big O we say that Bubble Sort has an efficiency of O(N)^2 or quadratic time which is considered to be a relatively inefficient algorithm

//A newsted loop normally has a complexity of O(N^2)
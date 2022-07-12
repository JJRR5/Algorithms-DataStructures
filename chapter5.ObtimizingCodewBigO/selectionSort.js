//1. We check each cell of the array form left to right do determine which value is least. We keep track of the lowest value within the array(We store this value in a variable)

//2.Once we determined which index contains the lowest value, we swap its value with the value we began the pass through with and then we start with the next index.

function selectionSort(arr){
    for (let i = 0; i < arr.length; i++){
        let lowestValueIndex = i; // variable that sotre the index of the lowest value within the array
        for(let j = i + 1; j < arr.length ; j++){
            //if there is a lowest value in the array we store it in the lowestValueIndex
            if(arr[j] < lowestValueIndex){
                lowestValueIndex = j
            }
        }
        //if the lowest value was the first value that we started our pass thorught we don't do anything
        if(lowestValueIndex !== i){
        //but if we found another lowest value in a different index in the array we need to swap it 
            let temp = arr[i]
            arr[i] = arr[lowestValueIndex]
            arr[lowestValueIndex] = temp
        }
    }
    return arr
};

//Efficiency of selection sort
//in the world of Big O Notation selection sort an dbubble sort are described exactly in the same way 

//Selectin sort should be a O(N^2 / 2) algorithm but in Big O is O(N^2) this is because a a major rule for Big O : "Big O ignore constants"

//This means that Big O never includes regular numbers. For example: for an algorithm that is O(N^2 / 2) we drop the "/2" bacause its a regular number, and expres the efficiency as O(N^2)

//Other examples
// N / 2 => O(N)
// N^2 + 10 => O(N^2)
// O(100N) => O(N)


//Significant Steps
function printNumbers(upperLimit){
    let number = 2
    while (number <= upperLimit){
        if (number % 2 == 0){
            console.log(number);
        }
        number += 1
    }
};
//this means that when we found code like the previous one we found oter steps like the comparation, the console.log and the increment, but these steps really care in Big O the answer is yes but based on the rules of Big O we just drop these steps




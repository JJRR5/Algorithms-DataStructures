function doubleArray(arr,i = 0){
    if (i >= arr.length){
        return
    }
    arr[i] *= 2
    doubleArray(arr,i++)
};

//Recrusive Category: Calculations
//There are many functions whose goal it is to perform a calculation: a function that returns the sum of two numbers, of a function that finds the greates value within an array

//Top Down Recursion
//it's a different way to solve a problem, we can solve a probelm without even knowing how to solve the problem.

//1.- Imagine the fucntion you are writting has already been implemented by someone else
//2.- Identifiy the subproblem of the problem
//3.- See what happens when you call the function on the subproblem and go form there

//A sub problem is a version of the same probelm applied to a smaller input

//example 

function factorial(n){
    if (n === 1){
        return 1 
    }else{
        return number * factorial(number - 1)
    }
};

//when we want to solve a problem using the top-down strategy it needs to be solve with recursion





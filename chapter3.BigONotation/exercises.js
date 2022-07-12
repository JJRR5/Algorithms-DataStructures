//1. Use Big O Notation to describe the time complexity of the following function that determines whether a given year is a leap year:

function isLeapYear(year) {
    return (year % 100 === 0) ? (year % 400 !== 0) :(year % 4 === 0);
}
//answer = O(1)

//2. Use Big O Notation

function arraySum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
//answer = O(n)

//3 answer = O(log N)


//4 O(N)

//5 O(1)
//1.-Write a function thar returns the interesection of two arrays.
const arr = [0,2,4,6,8]
const arr2 = [1,2,3,4,5]
//asnweer => [2,4]

function intersection(arr1,arr2){
    let hashTable = {}
    let newArr = []

    for(let value of arr1){
        hashTable[value] = true
    }

    for(let value of arr2){
        if(hashTable[value]){newArr.push(value)}
    }
    return newArr
}

//2.-Write a function that accepts an array of strings and returns the first duplicate value it finds

const arr3 = ["a","b","c","d","c","e","f"]
// answer =>  "c"
function duplicates(arr){
    let hashTable = {}
    
    for(const letter of arr){
        
        hashTable[letter] = 0 
    }
    for(const letter of arr){
        if(hashTable[letter] >= 0){hashTable[letter] +=1}  
		if(hashTable[letter] > 1){return letter}
    }
};

// Book answer
function findDuplicates(arr){
    let hashTable = {}
    
    for(let i = 0; i < arr.legnth ; i++){
        if(hashTable[arr[i]]){
            return arr[i]
        }else{
            hashTable[arr[i]] = true
        }
    }
}

//3.- Write a function that accepts a string that contains all the letters of the alphabet except one and returns the missing letter

const test1 = "the quick brown box jumps over a lazy dog"
//answer => "f"

function allLetters(str){

    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    let hashTable = {}
    
    for(const letter of str){hashTable[letter] = true}
    
    for(const letter of alphabet){if(!hashTable[letter]){return letter}}
    
    return "correct"
};

//4.- Wrirte a funciton that returns the first non duplciated character in a string
const test3 = "minimum"
//answer => "n"
function noDuplicates(str){
    let hashTable = {}
    
    for(const letter of str){
        hashTable[letter] ? hashTable[letter]++ : hashTable[letter] = 1
    }

    for(const letter of str){
        if(hashTable[letter] === 1){return letter}
    }
};
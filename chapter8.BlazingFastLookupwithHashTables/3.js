// Array subset
const arr = ["a","b","c","d","e","f"]
const sub = ["b","d","f"] //yes
const sub2 = ["a","b",'h'] //no

// Not opbitimized function

function isSubset(arr1,arr2){
    let largerArr
    let smallerArr

    //Determine which arrray is smaller:
    if(arr1.length > arr2.length){
        largerArr = arr1
        smallerArr = arr2
    }else {
        largerArr = arr2
        smallerArr = arr1
    }
    //Iterate through smaller array
    for(let i = 0; i < smallerArr ; i++){
        //Assume temoprarily that the current value from smaller array is not found in larger array
        let foundMatch = false
        //For each value in smaller Array, iterate through larger array
        for(let j = 0; j < largerArr.length; j++){
            //If the two values are equal, it means the current value in smaller array is present in the larger array
            if(smallerArr[i] === largerArr[j]){
                foundMatch = true
                break;
            }
        }
        //If the current value in the smaller array doesn't exist in larger array return false
        if(foundMatch === false){return false}
        //If we get to the end of the loops it means that all values from smaller array are present in larger array
        return true
    }
};

// Obtimized function
function isSubset(arr1,arr2){
    let largerArr
    let smallerArr
    let hashTable = {}

    //Determine which arrray is smaller:
    if(arr1.length > arr2.length){
        largerArr = arr1
        smallerArr = arr2
    }else {
        largerArr = arr2
        smallerArr = arr1
    }

    for(const value of largerArr){hashTable[value] = true}

    for(const value of smallerArr){!hashTable[value] ?? false}
    
    return true
}
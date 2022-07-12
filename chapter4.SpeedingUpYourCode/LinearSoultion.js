//Another way to find if there are duplciates in an array is the following function

const arr = [3,5,2,8]

function hasDuplicates(arr){
    let duplicates = []
    for(let i = 0; i < arr.length; i++){
        if(duplicates[arr[i]] === 1){
            return true
        }else{
            duplicates[arr[i]] = 1
        }
    }
    return false
};

//first iteration : duplicates = [undefined, undefined, 1, undefined]
//second iteration: duplicates = [undefined, undefined, 1, undefined, 1]
//third iteration : duplicates = [undefined, 1, 1, undefined, 1]
//final iteration: duplicates = [undefined, 1, 1, undefined, 1,undefined,undefined,1]

//This algorithm is gonna be O(N)
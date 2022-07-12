//Duplicate values optimized 

function hasDuplicateValue(arr){
    arr.sort((a,b) => a - b)

    for(let number in arr){
        if(arr[number] === arr[number+1]){
            return true
        }
    }

    return false
};

//Big O => (N log N)

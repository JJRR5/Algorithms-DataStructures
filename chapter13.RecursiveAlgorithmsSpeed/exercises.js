//1.-Greatest product of any three numbers
function greatestProduct(arr){
    arr.sort((a,b)=>a-b)

    return arr[arr.length-1] * arr[arr.length-2] * arr[arr.length-3]
};



//2.- 
function findMissingNumber(arr){
    arr.sort((a,b)=> a - b)

    for(let i = 0; i < arr.length ; i++){
        if(arr[i] !== i){
            return i
        }
    }
    return null
};
//BigO => O(N ^ 2)


//3.- Greatest number within an array 
//3.1 => O(N^2)
function greatestNumber1(arr){
    let greatest = 0
    for(let i = 0; i < arr.length ; i++){
        for(let j = 0; j < arr.length ; j++){
            if(arr[j] > arr[i]){
                greatest  = arr[j]
            }
        }
    }
    return greatest
}

//3.2 => O(N log N)
function greatestNumeber2(arr){
    arr.sort((a,b) => a - b)

    return arr[arr.length - 1]
}

//3.3 => O(N)

function greatestNumeber3(arr){
    let greatest = arr[0]

    for(let i = 0; i < arr.length ; i++){
        if(arr[i] > greatest) { greatest = arr[i]}
    }
    return greatest
    
};


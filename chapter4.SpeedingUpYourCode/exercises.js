//1. 7, 10000, 2000, 10, 4,000,000
//2 16
//3 O(N^2)
//4  
function greatestNumber(arr){
    let bigger  = arr.sort( (a,b) => a - b).reverse()
    return bigger[0]
}

//book solution

function greatestNumberBook(arr){
    greatestNumber = arr[0]
    for (let i = 0; i < arr.length; i++){
        if( i > greatestNumber){
            greatestNumber = i
        }
    return greatestNumber
    }
        
    
};
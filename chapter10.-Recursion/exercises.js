//1.- return if low > high
//2.- 80,640 => infinite recursion 
//3.- if high === low return low;
//4.-
function allNumbers(arr){
    for(number of arr){
        if(typeof number === "object"){
            allNumbers(number)
        }else{
            console.log(number)
        }
    }
}

// 2 of 4 good
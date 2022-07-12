//1.- 

const test = ["ab","c","def","ghij"]
//subproblem could be => ["c","def","ghij"]

characterCount(test)
function characterCount(arr){
    if(arr.length === 0){
        return 0
    }
    return arr[0].length + characterCount(arr[1,arr.length-1])
}

//2.- 
const test1 = [1,2,3,4,5]
//subproblem => [2,3,4,5]

selectEven(test1)


function selectEven(test){
    if(test.length === 0){
        return []
    }
    if(test[0].length % 2 === 0){
        return [test[0]] + selectEven(test[1,test.length - 1])
    }else{
        return selectEven(test[1,test.length - 1])
    }
}

//3.- 

//4 => wrong
//5 => wrong

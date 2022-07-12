//Recursion is the term for a function calling itself


function blah(){
    blah();
};

function recursion(number) {
    console.log(number)
    if(number === 0){
        return 
    }else{
        recursion(number - 1)
    }
}
recursion(10)

//In recursion terminology the case in which our function will not recurse is known as the base case

//Every recursvie funciton needs at least one base case to prevent it calling itslef indefinitley 

//Recursion is often a great choice for an algorithm in which the algorithm needs to dig into an arbitrary number of levels deep into something 
function wordBuilder(arr){
    let collection = []
    for(let i = 0; i < arr.length ; i++){
        for(let j = 0; j < arr.length ; j++){
            if(i !== j){
                collection.push(arr[i] + arr[j])
            }
        }
    }
    return collection
};
//O(N^2)

function sample(arr){
    const first = arr[0]
    const middle = arr[arr.length / 2]
    const last = arr.reverse()
    return [first,middle,last[0]]
};
//O(1)

function averageCelcius(fReadings){
    let celciusN = []
    
    for(number of fReadings){
        let celciusCon = (number - 32) / 1.8  
        celciusN.push(celciusCon)
    }
    let sum = 0
    for(cNumbers of celciusN){
        sum += cNumbers
    }

    return sum / celciusN.length
};

//O(N)

function markInventory(cItems){
    cOptions = []

    for (item of cItems){
        for(let i = 1; i < 6 ; i++){
            cOptions.push(`${item}Size: ${String(i)}`)
        }
    }
    return cOptions
};
//O(N) because the nested loops does not run N times, it runs 5 times always for each element contained in N

//Count the Ones

function countOnes(arr){
    let count = 0
    
    for(let i = 0; i < arr.length; i++){
        for(number of arr[i]){
            if(number === 1){
                count++
            }
        }
    }
    return count
};
//O(N)

//Palindrome Checker
function isPalindrome(str){
    let s = str.split("")
    let lIndex = 0;
    let reverse = [...s].reverse()
    let rIndex = 0

    while(lIndex < s.length / 2){
        if(s[lIndex] !== reverse[rIndex]){
            return false
        }
        lIndex++
        rIndex++
    }

    return true
};
//O(N)

//Get All the products

function twoNumbersProduct(arr){
    let products = []

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length ; j++){
            products.push(arr[i] * arr[j])
        }
    }

    return products
};

//0(N^2)

//Dealing with multiple datasets
function twoNumbersProducts(arr1,arr2){
    let r = []
    
    for(let i = 0; i < arr1.length ; i++){
        for(let j = 0; j < arr2.length ; j++){
            r.push(arr1[i] * arr2[j])
        }
    }

    return r
};

//O(N * M) => when M and N have the same amount of data we can say that is an O(N^2) but if N is greater than M we delete M and its an O(N)

//Password Cracker
//O(2^N)
//Each time the we add one element of data the number of steps is doubled, is the opposite of binary Search





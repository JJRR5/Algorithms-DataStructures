// Find the intersection values that occur in both of the arrays
const arr1 = [3,1,4,2]
const arr2 = [4,5,3,6]


function interesection(arr1,arr2){
    let result = []

    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                result.push(arr1[i])
                break; //with this line we skip the rest of the elements in the array because we find an identical value
            }
        }
    }

    return result
};

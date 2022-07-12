//Binary search is always applied to a sorted array 


const arr = [100,2,3,5,6,12,34,575]

const sorted = arr.sort((a,b) => a - b)

function binarySearch(arr, element) {
    const lowerBound = 0;
    const upperBound = arr.length - 1;

    while (lowerBound <= upperBound) {
        let mid = Math.floor((lowerBound + upperBound) / 2);
        let midpoint = arr[mid];
        if(element === midpoint){
            return mid;
        }else if( element < midpoint){
            upperBound = mid - 1;
        }else if (element > midpoint){
            lowerBound = mid + 1;
        }
    }
    return false;
}

binarySearch(arr,34)


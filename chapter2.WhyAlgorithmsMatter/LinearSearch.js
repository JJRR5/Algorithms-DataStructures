//Linear Search is an algorithm that search for an element in an array comparing the element that we are loking for with the element that is in the array

const arr = [1,2,3,4,5,6,7,8,9,10]

const result = arr.find((element,i) => {
    element === 5 ? console.log(`element find at index: ${i}`) : console.log("not found")
});


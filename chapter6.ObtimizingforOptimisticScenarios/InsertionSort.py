# Insertion sort consists of the following steps
#O(N^2)
arr = [4,2,7,1,3]

# We begin the first pass thorought by inspecting the value at the index 1, so we temporally remove the "2" and keep it inside a variable called tempValue

# we compare the 4 to the tempValue which is 2 because 4 is grater than 2 we shift the 4 to te right, and then when the gap is now at the left end of the array we insert the temp value into the gap, completing our first pass-thorought 

def insertionSort(arr): 
    #we need to start a loop that begins at position 1 not 0
    for i in range(1,len(arr)):
        #with each pass-trough, we save the value we're "removing" in a variable called tempValue
        tempValue = arr[i]
        position = i - 1 
        
        while position >= 0:
            if arr[position] > tempValue:
                arr[position + 1] = arr[position]
                position = position - 1
            else:
                break
        arr[position + 1] = tempValue
    return arr
        
print(insertionSort(arr))

#The efficiency of Insertion Sort

#In the real world average case scenarios happen realtively frequently 
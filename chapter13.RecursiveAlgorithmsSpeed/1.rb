#Quicksort

#Partitioning
# To partition an array is to take a random value from the array which is then called the "pivot" and make sure that every number that is less than the pivot ends up to the left of the pivot, and that every number that is grater than the pivot ends up to the right of the pivot

#the quicksort algorithm is a combination of partitions and recursion
#1.- Partition the array, the pivot is now in its proper place
#2.- divide the array into 2, one of the left of the pivot and another on the right of the pivot and recursively repeat Steps 1 and 2 
#3.- When we have a subarray that has zero or one elements, that is our base case

def quicksort!(letf_index,right_index)
    #Base case: the subarray has 0 or 1 elements:
    if right_index - letf_index <= 0
        return
    end 

    #Partition the range of elements and grab the index of the pivot
    pivot_index = partition!(left_index,right_index)

    #Recursively call this quicksort! method on whatever is to the left of the pivot: 
    quicksort!(left_index,right_index - 1)

    ##Recursively call this quicksort! method on whatever is to the right of the pivot:
    quicksort!(pivot_index + 1,left_index)
end
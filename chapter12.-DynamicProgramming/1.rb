# recursive can cause problems if it is not used propertly 
# example 


def max(array)
    return array[0] if array.length == 1

    if array[0] > max(array[1,array.length - 1])
        return array[0]
    else
        return max(array[1,array.length - 1])
    end
end

#ON => O(2^N)

#This function is an unoptimized one, becasue we call the function twice what could create a big problem 
#luckly there's an easy way to fix this:


def max(array)
    return array[0] if array.length == 1

    max_of_remainder = max(array[1,array.length - 1])

    if array[0] > max_of_remiander
        return array[0]
    else
        return max_of_remainder
    end
end

#ON => O(N)

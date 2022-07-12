#1.- 
def add_until_100(array)
    return 0 if array.length == 0
    if array[0] + add_until_100(array[1,array.length - 1] > 100)
        return add_until_100(array[1,array.length - 1]
    else
        return array[0] + add_until_100(array[1,array.length - 1]
    end
end

def add_until_100(array)
    return 0 if array.length == 0
    other_numers = add_until_100(array[1,array.length - 1]
    if array[0] + other_numbers  > 100)
        return other_numbers
    else
        return array[0] + other_numbers
    end
end

#2
# def golomb(n,memo = {})
#     return 1 if n == 1

#     if not memo.get[n]
#         memo[n] = golomb(n - 1)
#     end

#     return 1 + golomb(n - memo[n])
# end

#3
def unique_paths(rows,columns,memo = {})
    return 1 if rows == 1 || columns  == 1

    if !memo[[rows,columns]]
        memo[[rows,columns]] = unique_paths(rows - 1 ,columns,memo) + unique_paths(rows,columns - 1,memo)
    end

    return memo[[rows,columns]]
end






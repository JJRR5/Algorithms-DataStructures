# Going Bottom-Up
#This is the second technique to implement dynamic programming

# Bottom-Up Fibonacci

def fib(n):
    if n == 0:
        return 0
    
    #a and b start with the first two numbers in the series
    a = 0
    b = 1
    
    #Loop from 1 until n 
    for i in range(1,n):
        #a and b each move up to the next numbers in the series.
        #Namely,b becomes the sum of b + a, and a becomes what b used to be
        temp = a
        a = b
        b = temp + a
    return b 

#BigO => O(N)

#Memoization vs Bottom-Up
#Usually Bottom-Up is better bc we use less memory but both aproaches could be great 


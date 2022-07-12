#fibonacci
# 0,1,1,2,3,5,8,13,21,34,55

#given a number return it's value in fibonacci
# ex: 10 => 55

def fib(n):
    if n == 0 or n == 1:
        return n

    return fib(n - 2) + fib(n - 1)

#O(N) => O(2 ^ N)

# In this case we need to use overlaping subproblems

# Dynamic Programming through Memoization
#dynamic programming is the process of ptimizing recursive problems that have overlapping subproblems

# Obtimizing an algorithm with dynamic programming require 1 or 2 steps 

#1.- Memoization => reduces recursive calls by remembering previously computed functions

# This technique consists in creating a hash table and added into it the results of other calculations and only if a new calculation is'nt in it we made it 

def fib(n,memo = {}):
    if n == 0 or n == 1:
        return n

    if not memo.get(n):
        memo[n] = fib(n - 2,memo) + fib(n-1,memo)
    
    return memo[n]

fib(10)

#BigO => O(N)
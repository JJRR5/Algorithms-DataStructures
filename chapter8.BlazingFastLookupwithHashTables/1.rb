# Hash tables
# amazing superpower => fast reading
#It's a O(1) algorithm on average

# A hash table is a list of paired items

menu = {
    "french fries" => 0.75,
    "hamburguer" => 2.5,
    "hot dog" => 1.5,
    "soda" => 0.6
}

# A hash function needs to meet only one criterion to be valid: a hash function must convert the same string to the same number every single time it's applied 


# To find a value we need to know it's key 
# If we want to use a value to finds it's key we cannot take adventage of the hash tables

#a colission is when a value appears two times in a hash table

# When we want to add a key that already exists in the hash map we are only going to replace it's value for a new one, or we are going to create an array inside of that key which means that the look up would turn into a O(N) algorithm instead of a O(1)


# a hash table's efficiency depends on three factors:
# 1. The number of items in the hash table
# 2. How many cells are available in the hash table
# 3. Which hash function we're using

# A good hash function is one that spread the data across all avalible cells => the more we spread our data, the fewer collisions we'll have

# A good hash table is the one who strikes a balance of avoiding colissions while not consuming lots of memory

# THUMB RULE : "For every 7 data elements sotred in a hast talbe, it should have 10 cells" => is called the load factor 

# Hash tables are a perfect fit for paired data, they can also be used to make your code faster, even if you data does'nt exist in pairs 

# Using a hast table is like "using it as an index"
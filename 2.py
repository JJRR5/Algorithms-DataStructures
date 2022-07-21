
class TreeNode :
    def __init__(self,val,left=None,right=None):
        self.val = val
        self.left = left
        self.right = right

def search(searchValue,node):
    #Base case: if the node is nonexistent or we've found the value we're looking for:
    if node is None or node.value == searchValue:
        return node
    #if the value is less than the current node, perform search on the left child
    elif searchValue < node.value:
        return search(searchValue,node.leftChild)
    #if the value is greater than the current node, perform search on the rigth child
    else: #searchValue > node.value
        return search(searchValue,node.rightChild)

'''
    Insertion
    Binary Search Trees are the best when it comes to insertion
'''
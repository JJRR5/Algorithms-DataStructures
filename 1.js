/**
 * Trees
 * A tree is a node-based ds, but within a tree, each node can ahve links to multiple nodes
 * root => top of the tree
 * there are parent and children nodes
 * a node can have descendants and ancestors 
 * trees are said to have levels, each level is a row within the tree
 * one propoerty of a tree is how balanced it is. A tree is balanced when its node's subtrees have the same number of nodes in it 
 * 
 * Binary Search Trees
 * A binary tree is a tree in which each node has zero,one or two children.
 * A binary search tree is a binary tree that also abides by the following rules: 
 * 1.-Each node can have at most one "left" child and one "rigth" child.
 * 2.- A node's left descendants can only contain values that are less than the node itslef. Likewise a node's rigth descendatns can only contain values that are greatere than the node itself.
 * For a binary search tree to be valid, it can have at most one left (lesser) and one right (greater) child.
 * 
 */

class TreeNode{

    constructor(val,left = null,right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }

}

let node1 = new TreeNode(25)
let node2 = new TreeNode(75)
root = TreeNode(50,node1,node2)


/**
 * The algorithm for searching within a binary search tree is as follows: 
 * 1.- Designate a node to be the current node(At the begining of the algorithm the current node would be the root)
 * 2.- Inspect the value at the current node
 * 3.-  If we've found the value we are looking for we return it 
 * 4.- If the value we're looking for is less than the current node, search for it in its left subtree
 * 5.- If tha value we're looking for is greater than the current node, search for it in its rigth subtree
 * 6.- Repeat stepts 1 thorught 5 until we find the value we're searching for, or until we hit the nottom of the tree 
 * 
 * For a best case searching scenario this algorithm would be => O(log N)
 * 
 */


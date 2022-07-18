
#     One case where linked list shine is when we examine a single list and delete or insert many elements from it

#     **Doubly Linked List**
#     Each node has two links -one that points to the nex node, and another that points to the previous node 
#     The adventage of a Doubly Linked List is that we can move forward and backward through the list

class Node 
    attr_accessor :data, :next_node, :previous_node

    def initialize(data)
        @data = data
    end
end


class DoublyLinkedList
    attr_accessor :first_node, :last_node

    def initialize(first_node= nill, last_node = nill)
        @first_node = first_node
        @last_node = last_node
    end


    def insert_at_end(value)
        new_node = Node.new(value)
        #If there are no elements yet in the linked list:
        if !first_node
            @first_node = new_node
            @last_node = new_node
        else #if the linked list already has at least one node
            new_node.previous_node = @last_node
            @last_node.next_node = new_node
            @last_node = new_node
        end
    end

    def remove_from_front
        removed_node = @first_node
        @first_node = @first_node.next_node
    end

end

=begin

    Queues as Doubly Linked List
    a queue is a perfect abstract data type because doubly linked list can delete data from the front in O(1) and insert data and the end in O(1)

=end



class Queue
    attr_accessor :queue

    def initialize
        @data =  DoublyLinkedList.new
    end

    def enqueue(element)
        @data.insert_at_end(element)
    end
 
    def dequeue
        remove_node = @data.remove_from_front
        return remove_node.data
    end

    def read 
        return nill unless @data.first_node
        return @data.first_node.data
    end
end
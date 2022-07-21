
/* 
1.-Write a method that prints all the elements of the list
showItems(){
    let node = this.head;
    while (node) {
        console.log(node.data)
        node = node.next
    }
}

2.- 
def print_all_elements_reverse
        current_node = @last_node

        while current_node
            puts current_node
            current_node = current_node.previous_node
        end
    end

3.- 
getLast() {
        let lastNode = this.head;

        while (lastNode.next) {
            lastNode = lastNode.next
        }

        return lastNode.data
    }


4.- 
def reverse!
    previous_node = nill
    current_node = first_node

    while current_node
        next_node = current_node.next_node

        current_node.next_node = previous_node

        previous_node = current_node
        current_node = next_node
    end
    
    self.first_node = previous_node
end

5.- 
def delete_middle_node(node)
    node.data = node.next_data.data
    node.next_node = node.next_node.next_node

*/
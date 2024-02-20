class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
// linkedlist class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // adds an element at the end
    // of list
    add(element) {
        // creates a new node
        var node = new Node(element);

        // to store current node
        var current;

        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }
    addElementAtPosition(index, element) {
        var node = new Node(element);
        if (index < 0) {
            console.log("wrong index")
        }
        else {
            var curr, prev, it = 0;
            curr = this.head;
            while (it < index) {
                prev = curr;
                curr = curr.next;
                it++;
            }
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }
    deleteElementAtPosition(index) {
        if (index < 0) {
            console.log("pls enter correct index", index);
        }
        else {
            var curr, prev, it = 0;
            curr = this.head;
            while (it < index) {
                prev = curr;
                curr = curr.next;
                it++;
            }
            prev.next = curr.next;
        }
        this.size--;
    }
    deletElement(element) {
        var curr, prev, it = 0;
        curr = this.head;
        while (curr.next != null && curr.element != element) {
            prev = curr;
            curr = curr.next;
            it++;
        }
        prev.next = curr.next;
        return it;
    }
    largestElement() {
        var curr = this.head;
        let bigNumber = 0;
        while (curr) {
            if (bigNumber < curr.element) {
                bigNumber = curr.element;
            }
            curr = curr.next;
        }
        return bigNumber;
    }
    reverseList() {
        var curr = null;
        var str = "";
        let prev = null;
        while (curr) {
            prev = curr;
            curr = curr.next;
        }
        curr.next = this.head;
        //  curr.next = this.head;
    }

    // checks the list for empty
    isEmpty() {
        return this.size == 0;
    }

    // gives the size of the list
    size_of_list() {
        return this.size;
    }


    // prints the list items
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

}

// creating an object for the
// Linkedlist class
var ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
ll.printList();

// returns 1

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
ll.printList();
ll.addElementAtPosition(3, 17)
ll.printList();
ll.deleteElementAtPosition(4);
ll.printList();
console.log(ll.deletElement(30))
ll.printList();
console.log(ll.largestElement())
console.log("de")
ll.reverseList()

ll.printList();
// console.log(ll.size_of_list());

// prints 50 from the list

// prints 10 20 30 40

// returns 3


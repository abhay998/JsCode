class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0 ;
    }
  
}

function reverseList(head){
    let privious = null;
    let current = head;

    while(current != null){
        let nextNode = current.next;
        current.next = privious;
        privious = current;
        current = nextNode;
    }
    return privious;
}

// 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

head = reverseList(head);

console.log("Reversed Linked List:", head);
// printList(head);
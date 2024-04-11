class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    addElement(element) {
        var node = new Node(element);
        if (this.head == null) {
            this.head = node;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node
        }
        this.size++;
    }
    deleteElement(num) {
        var current = this.head;
        let prev = this.head;

        if (this.head == null) {
            console.log("nothing can delete")
        }
        else {
            while (current) {
                if (num == current.element) {
                    prev.next = current.next;
                    break;
                }
                else {
                    prev = current
                    current = current.next;
                }
            }
        }
    }
    largestElement(){
        var current = this.head;
        let largeNumber = 0;
        if(this.head == null){
            console.log("no large number")
        }
        else{
            while(current){
                   if(current.element > largeNumber){
                    largeNumber = current.element
                    current = current.next;
                 }
                 else{
                    current = current.next;
                 }
            }
        }
        return  largeNumber;
    }
    reverseList(){
        console.log("", this.head )
         let lastItem = this.head;
         let prev = null;
         let next = null;
         

         while(lastItem != null){
              next = lastItem.next;
              lastItem.next = prev;
              prev = lastItem;
              lastItem = next;
         }
         console.log("prev",prev)
         return this.head = prev
    }
    printLinkList() {
        var current = this.head;
        let str = "";
        while (current) {
            console.log(current.element);
            str += current.element;
            current = current.next;
        }
        return str

    }
}

let linkList = new LinkList();
linkList.addElement(5);
linkList.addElement(39);
linkList.addElement(53);
linkList.addElement(20);
linkList.addElement(78);
// linkList.deleteElement(53);
// let  num =linkList.largestElement();
linkList.reverseList();
linkList.printLinkList();

// console.log("num ", num)
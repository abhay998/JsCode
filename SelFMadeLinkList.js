class Node{
    constructor(element){
       this.element = element;
       this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(element){
        var node = new Node(element);
        var current;
           if(this.head == null){
            this.head = node;
           }
           else{
            current = this.head
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    removeFrom(index) {
		if (index < 0 || index >= this.size)
			return console.log("Please Enter a valid index");
		else {
			var curr, prev, it = 0;
			curr = this.head;
			prev = curr;

			// deleting first element
			if (index === 0) {
				this.head = curr.next;
			} else {
				// iterate over the list to the
				// position to remove an element
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// remove the element
				prev.next = curr.next;
			}
			this.size--;

			// return the remove element
			return curr.element;
		}
	}
    removeElemet (ele){
         var curr, prev = 0;
         curr = this?.head;
         prev = curr;
         while(curr != null){{
            if (curr.element === ele) {
                if(prev = null)
                prev = curr?.next;
            }
            prev?.next= curr?.next;
          }
          this.size--;
         }
         return -1;
    }

    printLinkList(){
        var current = this.head;
        let str=''
        while(current){
            str += current.element + ' ';
            current = current?.next;

        }
        console.log(str)
    }
}
var li = new LinkedList();
li.add(10);
li.add(20);
li.add(50);
li.add(30);

console.log(li.printLinkList());
console.log(li.removeFrom(3));
console.log(li.removeElemet(50));


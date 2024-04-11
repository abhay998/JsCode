class QueueProgram{
    constructor(){
        this.items = {};
        this.frontIndex = 0;
        this.lastIndex = 0;
    }
    addElement(item){
        this.items[this.lastIndex]= item;
        this.lastIndex++;
        return "added element"+item
    }
    peekElement(){
        if(Object.keys(this.items)?.length> 0){
        return this.items[this.frontIndex];
        }
    }
    deleteElement(){
        let returnItem =  this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return returnItem;
    }
    size(){
        return this.lastIndex - this.frontIndex;
    }
    isEmpty(){
        if(this.lastIndex - this.frontIndex == 0){
            return true;
        }
        else{
            return false;
        }
    }
    clear(){
        this.items = {};
        this.frontIndex = 0;
        this.lastIndex = 0;
    }
    printQueue(){
         for(let i in this.items){
            console.log("items", this.items[i]);
         }
    }
}

let queueProgram = new QueueProgram();
console.log(queueProgram?.addElement(22)) 
console.log(queueProgram?.addElement(39)) 
console.log(queueProgram?.addElement(938)) 
console.log(queueProgram?.addElement(26)) 
console.log(queueProgram?.addElement(91)) 
console.log(queueProgram?.addElement(56)) 
console.log(queueProgram?.deleteElement()) 
console.log(queueProgram?.deleteElement()) 
console.log(queueProgram?.deleteElement()) 
queueProgram.printQueue();
console.log(queueProgram?.peekElement())




class StackProgramUsingArray{
    constructor(){
        this.items = []
    }
    addElement(item){
        this.items.push(item);

    }
    deleteElement(){
        this.items.pop();
    }
    isEmpty(){
        return this.items?.length == 0
    }
    peekElement(){
        return this.items[this.items.length -1]
    }
    printElement(){
        for(let i in this.items){
            console.log("this.items", this.items[i])
        }
    }
}

let stackProgramUsingArray = new StackProgramUsingArray();
stackProgramUsingArray.addElement(23);
stackProgramUsingArray.addElement(87);
stackProgramUsingArray.addElement(92);
stackProgramUsingArray.addElement(65);
stackProgramUsingArray.addElement(345);
stackProgramUsingArray.addElement(8);
stackProgramUsingArray.deleteElement();
stackProgramUsingArray.deleteElement();
stackProgramUsingArray.deleteElement();
stackProgramUsingArray.printElement();
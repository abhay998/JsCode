class Parent {
    constructor(nummber) {
        this.number = nummber
    }
    static printValue() {
        console.log(this.number)
        return 20
    }
    changeValue(number) {
        this.number = number
        console.log("number", this.number)
    }
}

class Child extends Parent{

}


let parent = new Child(10);
console.log(Child.printValue())
parent.changeValue(200);
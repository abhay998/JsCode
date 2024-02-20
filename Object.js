

class Person{

    constructor(name, surName){
        this.name = name;
        this.surName = surName;
    }

}

const person =  new Person("abhay", "singh");
let str = person.name+ person.surName;
console.log("str", str)
// function FunctionWithThis(name, age){

// }
// new FunctionWithThis("abhay", 21);


class FunctionWithThis{
      constructor(name, age){
        this.name = name;
        this.age = age;
      }
    
    geName(){
        console.log("name", this.name)
    }
}

new FunctionWithThis("Abhay", 25).geName();
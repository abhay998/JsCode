let obj1={
    firstName : 'Abhay',
    lastName: 'Singh',
    city: 'Bhilwara',
    state: 'Rajasthan',
    print: function(){
      console.log(this.firstName+ ""+ this.lastName);
    }
} 

let obj2={
    firstName : 'Aman',
    lastName: 'Sharma',
    city: 'Jaipur',
    state: 'Delhi',
} 

let obj3 = {
    name: 'Ajay',
    city: 'gurugram',
    printFullName: function(state, country){
     console.log("print", this?.name +this.city + state + country)
    }
} 

let obj4 = {
    name: 'Jai',
    city: 'Udaipur'
}

// obj1.print?.call(obj2);
obj3.printFullName?.call(obj4, 'Rajasthan', 'IN')
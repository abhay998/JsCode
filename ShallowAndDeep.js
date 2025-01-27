var person = {
    name: 'Abhay',
    age: 25,
    city: 'jaipur'
} 

var p1 = person;
p1.name = "Pratap";


var p2 = Object.assign({"blood": "B+"}, person) // this is shallow copy

var p3 = {...person};
p3.age = 27;

// console.log(person)
// console.log(p1)
// console.log(p2)
// console.log(p3)


let shop = {
    item: "pen",
    price: 20,
    qauntity: 10,
    brand:{
       name:"cello"
    }
}

let s1 = Object.assign({}, shop);
//s1.brand.name = "Big pen"; 
// this is issue of deep copy nested child always refer the refrence of parent object;
console.log("top shop", shop)
console.log("top s1", s2)

var s2 = JSON.stringify(shop);
s2 =  JSON.parse(s2);
s2.brand.name = "Small Pen";
console.log("below shop", shop)
console.log("below s2", s2)
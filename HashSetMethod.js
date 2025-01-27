let set = new Set();

let arr = [46,67,4,367,89,9,6,4,3,5,7,8,44,3,77,4,4,44];

arr.map((item)=>{
    set.add(item)
})

set.forEach((item)=> console.log("item item", item));

// console.log(set.has(4)); 
// console.log("set set", set)

let mapmethod = new Map();

arr.map((item, index)=>{
    mapmethod.set(index, item)
})

console.log(mapmethod); 

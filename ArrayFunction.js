let arr = [23,43,44,4,53,22,4,5,64,3,3,3];

let val = arr.filter((item)=> {
    if(item>4)
    return(
        item
    )
})
console.log("val", val);

let val1 = arr.map((item)=> {
    if(item>4)
    return(
        item
    )
}).filter(Number)
console.log("val1", val1);


let val2 = arr.forEach((item)=> {
    if(item>4)
    return(
        // item
        console.log("val2 item", item)
    )
})
console.log("val2", val2);

let val4 = arr.map((item)=> item> 5 ).filter(Boolean);
console.log("val4", val4);


// const products = [
//     { name: 'apples', category: 'fruits' },
//     { name: 'oranges', category: 'fruits' },
//     { name: 'potatoes', category: 'vegetables' }
//   ];
// const groupByCategory = Object.groupBy(products, product => {
//     return product.category;
//   });

//   console.log(groupByCategory); 
// const groupByCategory = products.reduce((group, product) => {
//     const { category } = product;
//     group[category] = group[category] ?? [];
//     group[category].push(product);
//     return group;
//   }, {});

//   console.log(groupByCategory);

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];


let resp = inventory.reduce((acc, next) => {
    const key = next.type;
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(next)
    return acc;

}, {})

console.log('resp ', resp)
// const result = inventory.reduce((acc, obj) => {
//     const key = obj.type;
//     if (!acc[key]) {
//         acc[key] = [];
//     }
//     acc[key].push(obj);
//     return acc;
// }, {});

// console.log('result ', result)

const arr = [{ price: 1, quantity: 1, name: "mango" },
{ price: 1, quantity: 1, name: "mango" },
{ price: 10, quantity: 1, name: "apple" },
{ price: 2, quantity: 1, name: "pineapple" },
{ price: 1, quantity: 1, name: "banana" },
{ price: 1, quantity: 1, name: "grapse" },
{ price: 10, quantity: 1, name: "papaya" },
{ price: 1, quantity: 1, name: "biscuit" },
{ price: 2, quantity: 1, name: "namkeen" },
]

//  let newArrResp = arr.reduce((acc, next)=> {
     
//     if(!acc[next.price]){
//         acc[next.price] = []
//     }
//     acc[next.price].push(next)
//     return acc;

//  },{})
let newArrResp = arr.sort((a, b) => a.name.localeCompare(b.name));

 console.log("newArrResp ", newArrResp)




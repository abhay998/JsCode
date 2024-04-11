// document.getElementById('grandparent').addEventListener('click', ()=>{
//     console.log("hello grandparent")
// }, true)

// document.getElementById('parent').addEventListener('click', ()=>{
//     console.log("hello parent")
// }, true)


// document.getElementById('çhildren').addEventListener('click', ()=>{
//     console.log("hello çhildren")
// }, true)

var a = 10;
{
    var a = 20;
    console.log("inside a", a)

    {
        let a = 10;
        console.log("nested inside ", a)
    }
}
console.log("outside a", a)

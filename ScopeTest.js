

let promise = new Promise((resolve, reject) => {
    let err = new Error("dklfjc");
    reject(err);
})

var a = 10;

promise.then((res) => console.log("res", res)).catch((a) => { a = 20, console.log(a) })
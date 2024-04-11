const calculateNumber = () =>{
     return false
}
let promises = new Promise((resolve, reject) => {
    if (calculateNumber()) {
        resolve('dijhhejc');
    } else {
        let err = new Error('Failed the calculation');
        reject(err.message);
    }
});

function callResponse() {
    promises
        .then((res) => console.log(res))
        .catch((err) => console.error("Error:", err));
}

callResponse();

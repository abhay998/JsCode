function reverserString(){
    let str = "Hello, 世界";
    let newStr = "";
    for(let i =str.length; i>0; i--){
         newStr = newStr+ str.charAt(i)
    }
    console.log("newStr", newStr)

}
reverserString();
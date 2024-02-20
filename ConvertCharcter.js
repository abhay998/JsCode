function ConvertCharcter() {
    let str = "aaaBBBcccDD0999";
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str?.charCodeAt(i) >= 97 && str?.charCodeAt(i) <= 122) {
            newStr += str.charAt(i).toUpperCase();
        }
        else if (str?.charCodeAt(i) >= 65 && str?.charCodeAt(i) <= 90) {
            newStr += str.charAt(i).toLowerCase();
        }
    }
    console.log("newStr ", newStr)
}
ConvertCharcter();
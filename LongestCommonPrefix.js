function LongestCommonPrefix() {
    let arr = ["geeksforgeeks", "geeks", "geek", "geezer"];
    let longestStr = "";
    let minLength = arr[1];
    for (let j = 0; j < arr.length; j++) {
        let count = 0;
        for (let i = 0; i < arr.length;) {
            if (arr[i].startsWith(minLength)) {
                longestStr = minLength;
                count++;
                i++;
            }
            else {
                let lengthMin = minLength?.length - 1;
                minLength = minLength?.slice(0, lengthMin)
                i = 0;
                count = 0;
                break;
            }
        }
        if (count == arr.length - 1) {
            break
        }
    }
    console.log("longestStr ", longestStr)
}
LongestCommonPrefix();

function anagram(str1, str2) {
    let str1Obj = {};
    let str2Obj = {};

    if (str1?.length != str2?.length) {
        console.log("No Anagram");
    }
    else {
        for (let i = 0; i < str1?.length; i++) {
            if (str1Obj[str1[i]]) {
                str1Obj[str1[i]]++;
            }
            else {
                str1Obj[str1[i]] = 1;
            }
        }
        for (let i = 0; i < str2?.length; i++) {
            if (str2Obj[str2[i]]) {
                str2Obj[str2[i]]++;
            }
            else {
                str2Obj[str2[i]] = 1;
            }
        }
    }
    console.log("str2Obj", str2Obj)
    console.log("str1Obj", str1Obj)
}
anagram('listen', 'silens');

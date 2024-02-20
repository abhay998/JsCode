function LongestPalindromString() {
  let str = "aaaabbaaaaadhdaaaa";
  let longestPalindrom = "";
  for (let i = 0; i < str.length; i++) {
    let newStr = "";
    for (let j = i; j < str.length; j++) {
      newStr = newStr + str?.charAt(j)
      if (newStr == newStr?.split("").reverse().join("") && newStr?.length > longestPalindrom?.length) {
        longestPalindrom = "";
        longestPalindrom = longestPalindrom + newStr;
      }
    }
  }
  console.log("longestPalindrom ", longestPalindrom)
}
LongestPalindromString();

// function longestPalindromStr() {
//   let str = "aaaabbaa";
//   for (let i = 0; i < str.length - 1; i++) {
//     let strPal1 = explode(str, i, i) // odd number palindrom str
//     let strPal2 = explode(str, i, i + 1) // even number palidrme str
//     console.log("strPal1 ", strPal1)
//     console.log("strPal2 ", strPal2)
//   }
// }

// function explode(str, l, r) {

//   while (l >= 0 && r < str.length) {
//     if (str.charAt(l) == str.charAt(r)) {
//       l--;
//       r++;
//     } else {
//       break;
//     }
//     return str.substring(l + 1, r - 1)
//   }
// }
// longestPalindromStr()
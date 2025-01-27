
var isPalindrome = function(s) {
    // /[0-9,!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let splitPattern = /[0-9,!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      splitText = s.split(splitPattern).join('').replace(/[" ",","]/g, '').toLowerCase();
      console.log(splitText)
      if(splitText.split('').reverse().join('') === splitText){
        return true;
      }
      return false;
};
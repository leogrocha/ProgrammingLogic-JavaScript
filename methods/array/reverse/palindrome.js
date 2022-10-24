// palindrome
function isPalindrome(palavra) {
    let reverse = [...palavra].reverse().join("");
    return reverse === palavra ? true : false;
  }
  
  console.log(isPalindrome('teste')); // false
  console.log(isPalindrome('baab')); // true
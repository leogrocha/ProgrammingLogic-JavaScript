const isPalindrome = (text) => {
    return isPalindromeTailRecursive(text, 0);
}

const isPalindromeTailRecursive = (text, index) => {
    if (text.length == 0) {
        return true;
    }

    if (index > text.length/2) {
        return true;
    }   

    var isNotEquals = text[index] != text[text.length - 1 - index]

    return isNotEquals ? false : isPalindromeTailRecursive(text, index + 1);
}

console.log(isPalindrome('abccba'));
console.log(isPalindrome('aba'));
console.log(isPalindrome('abaa'));
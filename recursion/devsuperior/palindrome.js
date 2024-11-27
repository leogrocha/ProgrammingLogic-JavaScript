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

const isPalindromeTwoPointers = (text) => {
    if (text.length===0){
        return true;
    }

    let p1 = 0;
    let p2 = text.length - 1;

    for (let index = 0; index < text.length/2; index++) {
        if (text[p1] != text[p2]) {
            return false;
        }

        p1++;
        p2--;
    }

    return true;
}

console.log(isPalindrome('abccba'));
// console.log(isPalindrome('aba'));
// console.log(isPalindrome('abaa'));

console.log(isPalindromeTwoPointers('abccba'));
// console.log(isPalindromeTwoPointers('aba'));
// console.log(isPalindromeTwoPointers('abaa'));
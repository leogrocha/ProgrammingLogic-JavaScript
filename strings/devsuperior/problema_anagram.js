const isAnagram = (s, t) => {

    arrayS = s.split("");
    arrayT = t.split("");
    if (arrayS.length != arrayT.length) {
        return false;
    }

    let anagram = true

    for (let i = 0; i < arrayS.length; i++) {
        var index = arrayT.indexOf(arrayS[i]);

        if(index == -1) {
            anagram = false;
            break;
        } else {
            arrayT.splice(index, 1)
        }
    }

    return anagram
}

console.log(isAnagram('cama', 'maca'));
console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('a', 'ab'));


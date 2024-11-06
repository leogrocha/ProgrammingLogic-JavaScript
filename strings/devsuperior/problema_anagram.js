const isAnagram = (s, t) => {
    const arrayS = s.split("");
    const arrayT = t.split("");
    if (arrayS.length != arrayT.length) {
        return false;
    }

    for (let i = 0; i < arrayS.length; i++) {
        var index = arrayT.indexOf(arrayS[i]);

        if(index == -1) {
            return false;
        } else {
            arrayT.splice(index, 1)
        }
    }

    return true
}

const isAnagramSort = (s, t) => {
    const sSorted = s.split("").sort().join("");
    const tSorted = t.split("").sort().join("");

    return sSorted === tSorted
}

const isAnagramArray = (s, t) => {

    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - 'a'.charCodeAt(0);
        count[index]++;
    }

    for (let i = 0; i < t.length; i++) {
        const index = t.charCodeAt(i) - 'a'.charCodeAt(0);
        count[index]--;
    }

    for (let value of count) {
        if (value !== 0) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram('cama', 'maca'));
console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('av', 'ab'));

console.log("----------------------------------");

console.log(isAnagramSort('cama', 'maca'));
console.log(isAnagramSort('anagram', 'nagaram'));
console.log(isAnagramSort('rat', 'car'));
console.log(isAnagramSort('av', 'ab'));

console.log("----------------------------------");

console.log(isAnagramArray('cama', 'maca'));
console.log(isAnagramArray('anagram', 'nagaram'));
console.log(isAnagramArray('rat', 'car'));
console.log(isAnagramArray('av', 'ab'));

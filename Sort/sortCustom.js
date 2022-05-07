const friends = [
    { name: 'John', age: 39 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 },
]

const comparePerson = (a, b) => {
    if (a.age < b.age)
        return -1;

    if (a.age > b.age)
        return 1;

    return 0;    
}

console.log(friends.sort(comparePerson));
/*
[
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 },
  { name: 'John', age: 39 }
]
*/
const names = ['Ana', 'ana', 'john', 'John'];

console.log(names.sort()); // [ 'Ana', 'John', 'ana', 'john' ]

console.log(names.sort((a, b) => {
    if(a.toLocaleLowerCase() < b.toLocaleLowerCase())
        return -1;

    if(a.toLocaleLowerCase() > b.toLocaleLowerCase())
        return 1;

    return 0;    
}));
// [ 'Ana', 'ana', 'John', 'john' ]
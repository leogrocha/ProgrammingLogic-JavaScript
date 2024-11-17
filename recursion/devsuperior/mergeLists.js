const mergeLists = (a, b) => {

    if (a.length === 0) {
        return b;
    }

    if (b.length === 0) {
        return a;
    }

    const head1 = a[0];
    const tail1 = a.slice(1);
    
    const head2 = b[0];
    const tail2 = b.slice(1);

    return [head1, head2].concat(mergeLists(tail1, tail2));
}

const a = [10,20,30];
const b = [5,8,7]

console.log(mergeLists(a,b));

const nomes1 = ["ana", "maria"];
const nomes2 = ["joao", "bob", "alex", "leo"]

console.log(mergeLists(nomes1, nomes2));





let map = new Map();

const transaction1 = {
    id: 1,
    valor: 10
}

const transaction2 = {
    id: 2,
    valor: 20
}

const transaction3 = {
    id: 3,
    valor: 30
}

map.set("chaves", [transaction1])

map.set("chaves", [...map.get("chaves"), transaction2])

map.set("quico", map.has("quico") ? [...map.get("quico"), transaction3] : transaction3)


console.log(map);
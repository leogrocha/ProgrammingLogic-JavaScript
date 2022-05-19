const employee = [
    {id: 1, name: 'Nam', age: 20},
    {id: 2, name: 'Tuan', age: 21},
    {id: 3, name: 'Hue', age: 22},
    {id: 4, name: 'Thanh', age: 23},
    {id: 5, name: 'Walter', age: 24},
    {id: 6, name: 'Jones', age: 25},
    {id: 7, name: 'Barney', age: 26},
]

const filter_age = employee.filter(f => f.age > 22);
console.log(filter_age);

const filter_name = employee.filter(n => n.name.length > 5);
console.log(filter_name);


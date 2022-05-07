const cars = [
    {brand: 'Fiat', model: 'Uno', yearOfManufacture: 2015},
    {brand: 'GM', model: 'Onix', yearOfManufacture: 2018},
    {brand: 'Ford', model: 'KA+', yearOfManufacture: 2018},
    {brand: 'Fiat', model: 'Cronos', yearOfManufacture: 2022},
]

const today = new Date();
const currentYear = today.getFullYear();

const carOfYear = cars.filter(car => car.yearOfManufacture === currentYear);
console.log(carOfYear); // [ { brand: 'Fiat', model: 'Cronos', yearOfManufacture: 2022 } ]
const currentDate =  new Date();

console.log(currentDate); // 2022-02-02T10:55:54.516Z

const year = currentDate.getFullYear();
console.log(year); //2022

const month = currentDate.getMonth();
console.log(month + 1); //2

const day = currentDate.getDate();
console.log(day); //2

const hours = currentDate.getHours();
console.log(hours);//7

const weekDay = currentDate.getDay();
console.log(weekDay+1); //3
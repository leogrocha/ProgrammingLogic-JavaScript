const today = new Date();
const dayWeek = today.getDay();

switch (dayWeek) {
    case 0:
    case 2:
    case 4:
    case 6:
        console.log('Duty');
        break;
    default:
        console.log('Day off');    
}
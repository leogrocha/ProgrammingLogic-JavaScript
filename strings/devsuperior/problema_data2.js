const formatDate = (day, month, year) => {
    // const formatDay = day < 10 ? '0' + day : day
    // const formatMonth = month < 10 ? '0' + month : month

    const formatDay = String(day).padStart(2, "0");
    const formatMonth = String(month).padStart(2, "0");

    return `${formatDay}/${formatMonth}/${year}`
}

const dates = {
    day: 21,
    month: 7,
    year: 2010
}

console.log(formatDate(dates.day, dates.month, dates.year));
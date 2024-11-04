const data1 = (data) => {
    const extractDatas = data.split("/")
    
    const day = Number(extractDatas[0])
    const month = Number(extractDatas[1])
    const year = Number(extractDatas[2])

    return {day, month, year};
}

const data1Substring = (data) => {
    
    const day = Number(data.substring(0,2));
    const month = Number(data.substring(3,5));
    const year = Number(data.substring(6,10));

    return {day, month, year};
}

const data = '21/07/2010'

const response = data1(data)

console.log(`Dia: ${response.day}`);
console.log(`Mês: ${response.month}`);
console.log(`Ano: ${response.year}`);

const responseString = data1Substring(data)

console.log(`Dia: ${responseString.day}`);
console.log(`Mês: ${responseString.month}`);
console.log(`Ano: ${responseString.year}`);
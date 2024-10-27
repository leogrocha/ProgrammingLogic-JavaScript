const data1 = (data) => {
    const extractDatas = data.split("/")
    
    const day = Number(extractDatas[0])
    const month = Number(extractDatas[1])
    const year = Number(extractDatas[2])

    return {day, month, year};
}

const data = '21/07/2010'

const response = data1(data)

console.log(`Dia: ${response.day}`);
console.log(`Mês: ${response.month}`);
console.log(`Ano: ${response.year}`);


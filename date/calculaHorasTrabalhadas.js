function retornaMillisegundos(horarioInicial, horarioFinal) {
    var startTime = new Date(`1970-01-01T${horarioInicial}`);
    var endTime = new Date(`1970-01-01T${horarioFinal}`);
    return endTime - startTime;
}

function calculaDiferencaTempo(millisegundos) {
    const totalSegundos = Math.floor(millisegundos / 1000);
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;
    
    return {
        totalSegundos: totalSegundos,
        horas: horas,
        minutos: minutos,
        segundos: segundos
    };
}

console.log(calculaDiferencaTempo(retornaMillisegundos('09:02:00', '17:57:00') - retornaMillisegundos('12:04:00', '13:05:00')));


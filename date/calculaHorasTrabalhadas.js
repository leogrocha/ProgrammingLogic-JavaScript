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

console.log(calculaDiferencaTempo(retornaMillisegundos('08:58:00', '17:18:00') - retornaMillisegundos('12:55:00', '13:35:00')));


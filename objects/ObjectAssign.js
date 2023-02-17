const data = {
    pessoa: {
        id: 1,
        nome: 'Seu Madruga',
        telefone: '(35)98877-4455',
        email: 'leonardo@gmail.com'
    }
}

// console.log(data);

Object.assign(data.pessoa, {
    nacionalidade: 'Brasileiro',
    profissao: 'Profissão',
})

// console.log(data);


const objeto = {
    pessoa: [
        {
            id: 1,
            nome: 'Seu Madruga',
            telefone: '(35)98877-4455',
            email: 'leonardo@gmail.com'
        },
        {
            id: 2,
            nome: 'Chaves',
            telefone: '(35)98877-4455',
            email: 'leonardo@gmail.com'
        },
        {
            id: 3,
            nome: 'Quico',
            telefone: '(35)98877-4455',
            email: 'leonardo@gmail.com'
        },

    ]
}

// console.log(objeto);

Object.assign(objeto.pessoa[0], {
    nacionalidade: 'Brasileiro',
    profissao: 'Profissão',
})

console.log(objeto.pessoa[0]);
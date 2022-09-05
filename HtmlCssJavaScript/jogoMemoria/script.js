// Variáveis globais do jogo
const min = 0;
const max = 29;
const qtdeElementos = 30;

function gerarNumerosAleatorios(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

function iniciarJogo() {

    let elements = new Set();

    while (elements.size != qtdeElementos) {
        for (let i = 0; i < qtdeElementos; i++) {
            elements.add(gerarNumerosAleatorios(min, max));
        }
    }

    const array = [...elements];

    const card_principal = document.querySelector('.card_principal');

    const files = ['bateria', 'gaita-de-fole', 'gongo', 'guitarra', 'lira', 'maracas', 'microfone', 'pandeiro', 'piano', 'sanfona', 'teclado', 'triangulo', 'trompete', 'violao', 'violino', 'bateria', 'gaita-de-fole', 'gongo', 'guitarra', 'lira', 'maracas', 'microfone', 'pandeiro', 'piano', 'sanfona', 'teclado', 'triangulo', 'trompete', 'violao', 'violino'];

    let indice = 0;
    let contador = 0;
    
    while (contador < qtdeElementos) {
        indice = array[contador];
        var card = document.createElement('div');
        card.id = 'card' + indice;
        card.className = 'card';
        
        const image = document.createElement('img');
        image.setAttribute('src', `./img/${files[indice]}.png`);
        image.setAttribute('alt', 'perfil');
        image.setAttribute('height', '50px');
        image.setAttribute('width', '130px');
        image.id = 'img' + indice;
        image.style.display = 'none';
        
        card.appendChild(image);
        card_principal.appendChild(card);
        contador++;
    }

    console.log(array);
}














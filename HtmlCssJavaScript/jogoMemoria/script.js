// Variáveis globais do jogo
const arrayConstante = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15];
const min = 1;
const max = 30;
const heightImage = 50;
const widthImage = 130;
const qtdeElementos = 30;

// Importando os ícones que serão utilizados no jogo.
const imagemBateria = document.createElement('img');
imagemBateria.setAttribute('src', "./img/bateria.png");
imagemBateria.setAttribute('alt', 'perfil');
imagemBateria.setAttribute('height', heightImage);
imagemBateria.setAttribute('width', widthImage);
imagemBateria.id = 'img1';


const imagemBateria2 = document.createElement('img');
imagemBateria2.setAttribute('src', "./img/bateria.png");
imagemBateria2.setAttribute('alt', 'perfil');
imagemBateria2.setAttribute('height', heightImage);
imagemBateria2.setAttribute('width', widthImage);


const imagemGaita = document.createElement('img');
imagemGaita.setAttribute('src', "./img/gaita-de-fole.png");
imagemGaita.setAttribute('alt', 'perfil');
imagemGaita.setAttribute('height', heightImage);
imagemGaita.setAttribute('width', widthImage);


const imagemGaita2 = document.createElement('img');
imagemGaita2.setAttribute('src', "./img/gaita-de-fole.png");
imagemGaita2.setAttribute('alt', 'perfil');
imagemGaita2.setAttribute('height', heightImage);
imagemGaita2.setAttribute('width', widthImage);


const imagemGongo = document.createElement('img');
imagemGongo.setAttribute('src', "./img/gongo.png");
imagemGongo.setAttribute('alt', 'perfil');
imagemGongo.setAttribute('height', heightImage);
imagemGongo.setAttribute('width', widthImage);


const imagemGongo2 = document.createElement('img');
imagemGongo2.setAttribute('src', "./img/gongo.png");
imagemGongo2.setAttribute('alt', 'perfil');
imagemGongo2.setAttribute('height', heightImage);
imagemGongo2.setAttribute('width', widthImage);


const imagemGuitarra = document.createElement('img');
imagemGuitarra.setAttribute('src', "./img/guitarra.png");
imagemGuitarra.setAttribute('alt', 'perfil');
imagemGuitarra.setAttribute('height', heightImage);
imagemGuitarra.setAttribute('width', widthImage);


const imagemGuitarra2 = document.createElement('img');
imagemGuitarra2.setAttribute('src', "./img/guitarra.png");
imagemGuitarra2.setAttribute('alt', 'perfil');
imagemGuitarra2.setAttribute('height', heightImage);
imagemGuitarra2.setAttribute('width', widthImage);


const imagemLira = document.createElement('img');
imagemLira.setAttribute('src', "./img/lira.png");
imagemLira.setAttribute('alt', 'perfil');
imagemLira.setAttribute('height', heightImage);
imagemLira.setAttribute('width', widthImage);


const imagemLira2 = document.createElement('img');
imagemLira2.setAttribute('src', "./img/lira.png");
imagemLira2.setAttribute('alt', 'perfil');
imagemLira2.setAttribute('height', heightImage);
imagemLira2.setAttribute('width', widthImage);


const imagemMaracas = document.createElement('img');
imagemMaracas.setAttribute('src', "./img/maracas.png");
imagemMaracas.setAttribute('alt', 'perfil');
imagemMaracas.setAttribute('height', heightImage);
imagemMaracas.setAttribute('width', widthImage);


const imagemMaracas2 = document.createElement('img');
imagemMaracas2.setAttribute('src', "./img/maracas.png");
imagemMaracas2.setAttribute('alt', 'perfil');
imagemMaracas2.setAttribute('height', heightImage);
imagemMaracas2.setAttribute('width', widthImage);


const imagemMicrofone = document.createElement('img');
imagemMicrofone.setAttribute('src', "./img/microfone.png");
imagemMicrofone.setAttribute('alt', 'perfil');
imagemMicrofone.setAttribute('height', heightImage);
imagemMicrofone.setAttribute('width', widthImage);


const imagemMicrofone2 = document.createElement('img');
imagemMicrofone2.setAttribute('src', "./img/microfone.png");
imagemMicrofone2.setAttribute('alt', 'perfil');
imagemMicrofone2.setAttribute('height', heightImage);
imagemMicrofone2.setAttribute('width', widthImage);


const imagemPandeiro = document.createElement('img');
imagemPandeiro.setAttribute('src', "./img/pandeiro.png");
imagemPandeiro.setAttribute('alt', 'perfil');
imagemPandeiro.setAttribute('height', heightImage);
imagemPandeiro.setAttribute('width', widthImage);


const imagemPandeiro2 = document.createElement('img');
imagemPandeiro2.setAttribute('src', "./img/pandeiro.png");
imagemPandeiro2.setAttribute('alt', 'perfil');
imagemPandeiro2.setAttribute('height', heightImage);
imagemPandeiro2.setAttribute('width', widthImage);


const imagemPiano = document.createElement('img');
imagemPiano.setAttribute('src', "./img/piano.png");
imagemPiano.setAttribute('alt', 'perfil');
imagemPiano.setAttribute('height', heightImage);
imagemPiano.setAttribute('width', widthImage);


const imagemPiano2 = document.createElement('img');
imagemPiano2.setAttribute('src', "./img/piano.png");
imagemPiano2.setAttribute('alt', 'perfil');
imagemPiano2.setAttribute('height', heightImage);
imagemPiano2.setAttribute('width', widthImage);

const imagemSanfona = document.createElement('img');
imagemSanfona.setAttribute('src', "./img/sanfona.png");
imagemSanfona.setAttribute('alt', 'perfil');
imagemSanfona.setAttribute('height', heightImage);
imagemSanfona.setAttribute('width', widthImage);

const imagemSanfona2 = document.createElement('img');
imagemSanfona2.setAttribute('src', "./img/sanfona.png");
imagemSanfona2.setAttribute('alt', 'perfil');
imagemSanfona2.setAttribute('height', heightImage);
imagemSanfona2.setAttribute('width', widthImage);

const imagemTeclado = document.createElement('img');
imagemTeclado.setAttribute('src', "./img/teclado.png");
imagemTeclado.setAttribute('alt', 'perfil');
imagemTeclado.setAttribute('height', heightImage);
imagemTeclado.setAttribute('width', widthImage);

const imagemTeclado2 = document.createElement('img');
imagemTeclado2.setAttribute('src', "./img/teclado.png");
imagemTeclado2.setAttribute('alt', 'perfil');
imagemTeclado2.setAttribute('height', heightImage);
imagemTeclado2.setAttribute('width', widthImage);

const imagemTriangulo = document.createElement('img');
imagemTriangulo.setAttribute('src', "./img/triangulo.png");
imagemTriangulo.setAttribute('alt', 'perfil');
imagemTriangulo.setAttribute('height', heightImage);
imagemTriangulo.setAttribute('width', widthImage);

const imagemTriangulo2 = document.createElement('img');
imagemTriangulo2.setAttribute('src', "./img/triangulo.png");
imagemTriangulo2.setAttribute('alt', 'perfil');
imagemTriangulo2.setAttribute('height', heightImage);
imagemTriangulo2.setAttribute('width', widthImage);

const imagemTrompete = document.createElement('img');
imagemTrompete.setAttribute('src', "./img/trompete.png");
imagemTrompete.setAttribute('alt', 'perfil');
imagemTrompete.setAttribute('height', heightImage);
imagemTrompete.setAttribute('width', widthImage);

const imagemTrompete2 = document.createElement('img');
imagemTrompete2.setAttribute('src', "./img/trompete.png");
imagemTrompete2.setAttribute('alt', 'perfil');
imagemTrompete2.setAttribute('height', heightImage);
imagemTrompete2.setAttribute('width', widthImage);

const imagemViolao = document.createElement('img');
imagemViolao.setAttribute('src', "./img/violao.png");
imagemViolao.setAttribute('alt', 'perfil');
imagemViolao.setAttribute('height', heightImage);
imagemViolao.setAttribute('width', widthImage);

const imagemViolao2 = document.createElement('img');
imagemViolao2.setAttribute('src', "./img/violao.png");
imagemViolao2.setAttribute('alt', 'perfil');
imagemViolao2.setAttribute('height', heightImage);
imagemViolao2.setAttribute('width', widthImage);

const imagemViolino = document.createElement('img');
imagemViolino.setAttribute('src', "./img/violino.png");
imagemViolino.setAttribute('alt', 'perfil');
imagemViolino.setAttribute('height', heightImage);
imagemViolino.setAttribute('width', widthImage);

const imagemViolino2 = document.createElement('img');
imagemViolino2.setAttribute('src', "./img/violino.png");
imagemViolino2.setAttribute('alt', 'perfil');
imagemViolino2.setAttribute('height', heightImage);
imagemViolino2.setAttribute('width', widthImage);

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

    for (let i = 0; i < array.length; i++) {
        var card = document.createElement('div');
        card.id = 'card' + i;
        card.className = 'card';

        // const files = ['bateria', 'gaita', 'gongo', 'guitarra', 'lira', 'maracas', 'microfone', 'pandeiro', 'piano', 'sanfona', 'teclado', 'triangulo', 'trompete', 'violao', 'violino', 'bateria', 'gaita', 'gongo', 'guitarra', 'lira', 'maracas', 'microfone', 'pandeiro', 'piano', 'sanfona', 'teclado', 'triangulo', 'trompete', 'violao', 'violino'];

        // const image = document.createElement('image');
        // image.setAttribute('src', `./img/${files[i]}.png`);
        // image.setAttribute('alt', 'perfil');
        // image.setAttribute('height', heightImage);
        // image.setAttribute('width', widthImage);
        // image.id = 'img' + i;
        //image.style.display = 'none';

        // console.log(image);
        // card.appendChild(image);

        if(array[i] == '1'){
            card.appendChild(imagemBateria);
        } else if (array[i] === '2') {
            card.appendChild(imagemGaita);
        } else if (array[i] === '3') {
            card.appendChild(imagemGongo);
        } else if (array[i] === '4') {
            card.appendChild(imagemGuitarra);
        } else if (array[i] === '5') {
            card.appendChild(imagemLira);
        } else if (array[i] === '6') {
            card.appendChild(imagemMaracas);
        } else if (array[i] === '7') {
            card.appendChild(imagemMicrofone);
        } else if (array[i] === '8') {
            card.appendChild(imagemPandeiro);
        } else if (array[i] === '9') {
            card.appendChild(imagemPiano);
        } else if (array[i] === '10') {
            card.appendChild(imagemSanfona);
        } else if (array[i] === '11') {
            card.appendChild(imagemTeclado);
        } else if (array[i] === '12') {
            card.appendChild(imagemTriangulo);
        } else if (array[i] === '13') {
            card.appendChild(imagemTrompete);
        } else if (array[i] === '14') {
            card.appendChild(imagemViolao);
        } else if (array[i] === '15') {
            card.appendChild(imagemViolino);
        } else if (array[i] === '16') {
            card.appendChild(imagemBateria2);
        } else if (array[i] === '17') {
            card.appendChild(imagemGaita2);
        } else if (array[i] === '18') {
            card.appendChild(imagemGongo2);
        } else if (array[i] === '19') {
            card.appendChild(imagemGuitarra2);
        } else if (array[i] === '20') {
            card.appendChild(imagemLira2);
        } else if (array[i] === '21') {
            card.appendChild(imagemMaracas2);
        } else if (array[i] === '22') {
            card.appendChild(imagemMicrofone2);
        } else if (array[i] === '23') {
            card.appendChild(imagemPandeiro2);
        } else if (array[i] === '24') {
            card.appendChild(imagemPiano2);
        } else if (array[i] === '25') {
            card.appendChild(imagemSanfona2);
        } else if (array[i] === '26') {
            card.appendChild(imagemTeclado2);
        } else if (array[i] === '27') {
            card.appendChild(imagemTriangulo2);
        } else if (array[i] === '28') {
            card.appendChild(imagemTrompete2);
        } else if (array[i] === '29') {
            card.appendChild(imagemViolao2);
        } else if (array[i] === '30') {
            card.appendChild(imagemViolino2);
        }

        card_principal.appendChild(card);
    }


    console.log(array);
}














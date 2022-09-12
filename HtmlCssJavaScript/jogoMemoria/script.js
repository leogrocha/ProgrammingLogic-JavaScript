// Variáveis globais do jogo
const min = 0;
const max = 29;
const qtdeElementos = 30;
var opcoesSelecionadas = [];
var idOpcoesSelecionadas = [];
const heightImage = 100;
const widthImage = 150;
var pontuacao = 0;
var tentativas = 0;

function gerarNumerosAleatorios(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

function criarCards() {
    let elements = new Set();
    opcoesSelecionadas = [];
    pontuacao=0;
    tentativas=0;
    document.getElementById('tentativas').innerHTML = 0;
    document.getElementById('pontuacao').innerHTML = 0;

    while (elements.size != qtdeElementos) {
        for (let i = 0; i < qtdeElementos; i++) {
            elements.add(gerarNumerosAleatorios(min, max));
        }
    }

    const array = [...elements];

    const files = ['bateria', 'gaita-de-fole', 'gongo', 'guitarra', 'lira', 'maracas', 'microfone', 'pandeiro', 'piano', 'sanfona', 'teclado', 'triangulo', 'trompete', 'violao', 'violino', 'bateria', 'gaita-de-fole', 'gongo', 'guitarra', 'lira', 'maracas', 'microfone', 'pandeiro', 'piano', 'sanfona', 'teclado', 'triangulo', 'trompete', 'violao', 'violino'];

    const card_principal = document.querySelector('.card_principal');

    var indice = 0;
    var contador = 0;
    var imgs = '';
    while (contador < qtdeElementos) {
        indice = array[contador];

        imgs += '<div id="' + indice + '" class="card" onclick="mostrandoInstrumento(this.id)">'
            + ' <img  id="img' + indice + '" style="display: none;" src="./img/' + files[indice] + '.png" alt="instrumento" width="' + widthImage + '" height="' + heightImage + '"> '
            + '<img  id="imgWhite' + indice + '" style="display: flex;" src="./img/white.jpg" alt="white" width="' + widthImage + '" height="' + heightImage + '">'
            + ' <img  id="imgCheck' + indice + '" style="display: none;" src="./img/check.png" alt="check" width="' + widthImage + '" height="' + heightImage + '"> '
            + '</div>'

        contador++;

        card_principal.innerHTML = imgs;
    }
}

function mostrandoInstrumento(id) {

    if (document.images.namedItem('imgCheck' + id).style.display == 'none') {
        document.images.namedItem('imgWhite' + id).style.display = 'none';
        document.images.namedItem('img' + id).style.display = 'flex';
        opcoesSelecionadas.push(id);
        if (opcoesSelecionadas.length == 2) {
            setTimeout(checandoPontuacao(), 2000);
        }
    }
}

function checandoPontuacao() {
    const opcaoSelecionada1 = opcoesSelecionadas[0];
    const opcaoSelecionada2 = opcoesSelecionadas[1];

    let max = Math.max(opcaoSelecionada1, opcaoSelecionada2);
    let min = Math.min(opcaoSelecionada1, opcaoSelecionada2);

    let resultado = max - min;
    if (resultado == 15) {
        setTimeout(() => {
            document.images.namedItem('img' + opcaoSelecionada1).style.display = 'none';
            document.images.namedItem('imgCheck' + opcaoSelecionada1).style.display = 'flex';
            document.images.namedItem('img' + opcaoSelecionada2).style.display = 'none';
            document.images.namedItem('imgCheck' + opcaoSelecionada2).style.display = 'flex';
        }, 500);

        pontuacao++;
        document.getElementById('pontuacao').innerHTML = pontuacao;
        tentativas++;
        document.getElementById('tentativas').innerHTML = tentativas;
        opcoesSelecionadas = [];

        if (pontuacao == 15) {
            setTimeout(() => {
                alert("Parabéns!!!! Jogo finalizado! Foram " + tentativas + " tentativas");
            }, 500)
            setTimeout(criarCards, 2000);
            document.getElementById('tentativas').innerHTML = 0;
            document.getElementById('pontuacao').innerHTML = 0;
        }
    } else {
        setTimeout(() => {
            document.images.namedItem('img' + opcaoSelecionada1).style.display = 'none';
            document.images.namedItem('imgWhite' + opcaoSelecionada1).style.display = 'flex';
            document.images.namedItem('img' + opcaoSelecionada2).style.display = 'none';
            document.images.namedItem('imgWhite' + opcaoSelecionada2).style.display = 'flex';
        }, 500);

        tentativas++;
        document.getElementById('tentativas').innerHTML = tentativas;
        opcoesSelecionadas = [];

    }
}

// function virarCard(id) {
//     const files = ['bateria', 'gaita-de-fole', 'gongo', 'guitarra', 'lira', 'maracas', 'microfone', 'pandeiro', 'piano', 'sanfona', 'teclado', 'triangulo', 'trompete', 'violao', 'violino', 'bateria', 'gaita-de-fole', 'gongo', 'guitarra', 'lira', 'maracas', 'microfone', 'pandeiro', 'piano', 'sanfona', 'teclado', 'triangulo', 'trompete', 'violao', 'violino'];

//     //let card = document.images(id);
//     //console.log(document.getElementById('card' + id));
//     opcoesSelecionadas.push(files[id]);
//     idOpcoesSelecionadas.push(id);
//     console.log(opcoesSelecionadas);
//     card.setAttribute('src', `./img/${files[id]}.jpg`);
//     card.setAttribute('alt', 'Instrumento');
//     card.setAttribute('width', 150);
//     card.setAttribute('height', 100);
//     if(opcoesSelecionadas.length==2){
//         setTimeout(checandoPontuacao(), 500);
//     }
// }



// function iniciarJogo() {

//     let elements = new Set();

//     while (elements.size != qtdeElementos) {
//         for (let i = 0; i < qtdeElementos; i++) {
//             elements.add(gerarNumerosAleatorios(min, max));
//         }
//     }

//     const array = [...elements];

//     const card_principal = document.querySelector('.card_principal');

//     const files = ['bateria', 'gaita-de-fole', 'gongo', 'guitarra', 'lira', 'maracas', 'microfone', 'pandeiro', 'piano', 'sanfona', 'teclado', 'triangulo', 'trompete', 'violao', 'violino', 'bateria', 'gaita-de-fole', 'gongo', 'guitarra', 'lira', 'maracas', 'microfone', 'pandeiro', 'piano', 'sanfona', 'teclado', 'triangulo', 'trompete', 'violao', 'violino'];

//     let indice = 0;
//     let contador = 0;



//     while (contador < qtdeElementos) {
//         indice = array[contador];
//         var card = document.createElement('div');
//         card.id = 'card' + indice;
//         card.className = 'card';

//         const image = document.createElement('img');
//         image.setAttribute('src', `./img/${files[indice]}.png`);
//         image.setAttribute('alt', 'perfil');
//         image.setAttribute('height', '50px');
//         image.setAttribute('width', '130px');
//         image.id = 'img' + indice;
//         image.style.display = 'none';
//         // image.onclick = addOnClick(indice);

//         // document.images[indice].addEventListener('click', () => {
//         //     document.images[indice].style.display = 'grid';
//         // })
//         //image.addEventListener('click', addOnClick(indice));


//         card.appendChild(image);
//         card_principal.appendChild(card);
//         contador++;
//     }

//     console.log(array);
// }



















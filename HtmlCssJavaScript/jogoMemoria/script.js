const arrayConstante = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15];
const min = 1;
const max = 30;

function gerarNumerosAleatorios(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

function iniciarJogo() {
    
    // Setando os valores iniciais do painel
    document.getElementById('numPares').innerHTML = arrayConstante.length / 2;
    document.getElementById('numParesRestantes').innerHTML = arrayConstante.length / 2;
    document.getElementById('numTentativas').innerHTML = 0;


    let new_array = [];
    var arrayEspelho = arrayConstante;
    let contador = 0;
    
    while (contador < 30) {

        let index = arrayEspelho[contador];
        var number = parseInt(gerarNumerosAleatorios(min, max));
        
        if(new_array[number] == undefined) {
            new_array[number] = index;
            contador++;
        } 
    }
    
    for(let i = 1; i < 31; i++) {
        console.log('indice: '+ i + ' valor: ' + new_array[i]);
        document.getElementById('row'+i).innerHTML = new_array[i];
    }
}

const heightImage = 50;
const widthImage = 130;


// Criar imagem
const image = document.createElement('img');
image.setAttribute('src', "./img/bateria.png");
image.setAttribute('alt', 'perfil');
image.setAttribute('height', heightImage);
image.setAttribute('width', widthImage);

const row1 = document.getElementById('row1');
row1.appendChild(image);

const image2 = document.createElement('img');
image2.setAttribute('src', "./img/guitarra.png");
image2.setAttribute('alt', 'perfil');
image2.setAttribute('height', heightImage);
image2.setAttribute('width', widthImage);

const row2 = document.getElementById('row2');
row2.appendChild(image2);

const image3 = document.createElement('img');
image3.setAttribute('src', "./img/microfone.png");
image3.setAttribute('alt', 'perfil');
image3.setAttribute('height', heightImage);
image3.setAttribute('width', widthImage);

const row3 = document.getElementById('row3');
row3.appendChild(image3);

const image4 = document.createElement('img');
image4.setAttribute('src', "./img/piano.png");
image4.setAttribute('alt', 'perfil');
image4.setAttribute('height', heightImage);
image4.setAttribute('width', widthImage);

const row4 = document.getElementById('row4');
row4.appendChild(image4);

const image5 = document.createElement('img');
image5.setAttribute('src', "./img/violino.png");
image5.setAttribute('alt', 'perfil');
image5.setAttribute('height', heightImage);
image5.setAttribute('width', widthImage);

const row5 = document.getElementById('row5');
row5.appendChild(image5);

// background image
const backgroundImage = document.createElement('backgroundImage');
backgroundImage.setAttribute('src', "./img/guitarra.png");

const row10 = document.getElementById('row10');
var urlString = 'url(./img/perfil.jpeg)';
row10.style.backgroundImage = urlString;









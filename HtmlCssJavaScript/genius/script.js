// Variáveis globais
const min = 0;
const max = 3;
var select = [];
var sort = [];
var counter = 0;
var colors = [];


// Função para gerar os números aleatórios que serão as cores
function numberRandom(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

function startGame() {
    document.querySelector('.wait').style.display = 'flex';
    document.querySelector('.go').style.display = 'none';

    select = [];
    sort = [];
    counter = 0;
    colors = [];
    document.getElementById('counter').innerHTML = counter;

    setTimeout(createColors, 300);
}

function createColors() {

    // Altera o banner de status
    document.querySelector('.wait').style.display = 'flex';
    document.querySelector('.go').style.display = 'none';

    // Gerar número aleatório e adicionar no array
    var numberSort = numberRandom(min, max);
    sort.push(numberSort);
    if(numberSort == 0) {
        colors.push('blue'); 
    } else if (numberSort == 1) {
        colors.push('red');
    } else if (numberSort == 2) {
        colors.push('green');
    } else if (numberSort == 3) {
        colors.push('yellow');
    }

    // Variáveis de tempo de início e fim da exibição das cores
    var openColor = 1000;
    var closedColor = 0;

    // For para percorrer o array sort e ir implementando as cores geradas
    for(let i = 0; i < sort.length; i++) {
        openColor += 1500;
        closedColor = openColor + 1000;

        setTimeout(() => {
            document.getElementById(sort[i]).style.backgroundColor = colors[i];
        }, openColor)

        setTimeout(() => {
            document.getElementById(sort[i]).style.backgroundColor = '';
        }, closedColor)
    }
    
    setTimeout(selectColors, closedColor + 1000);
    
}

function selectItem(id) {

    select.push(id);
    
    selectColors();
}

function selectColors() {
    document.querySelector('.wait').style.display = 'none';
    document.querySelector('.go').style.display = 'flex';
    let equals = true;

    for(let i = 0; i < select.length; i++) {
        if(sort[i] != select[i]) {
            equals = false;
            ToastSnack("Erooooou! Tente Novamente", 3000, '10px', 'erro');
            setTimeout(startGameLost, 4000);
        }

        if(select.length == sort.length) {
            select = [];
            counter++;
            document.getElementById('counter').innerHTML = counter;
            createColors();
        }
    }
}

function startGameLost() {
    document.querySelector('.wait').style.display = 'flex';
    document.querySelector('.go').style.display = 'none';

    select = [];
    sort = [];
    counter = 0;
    colors = [];
    document.getElementById('counter').innerHTML = counter;
}

function ToastSnack(msg, tempo, margin, tipo) {
    var tempo = tempo == undefined ? 4000 : tempo;
    var x = document.getElementById("snackbar");
    x.innerHTML = msg;
    x.className = "show";

    x.style.marginBottom = margin == undefined ? '0px' : margin;
    x.style.backgroundColor = tipo == 'erro' ? 'red' : '#1c1c1cc2';
    setTimeout(function () {
        x.className = x.className.replace("show", "");
        x.style.marginBottom = '0px';

    }, tempo);
}
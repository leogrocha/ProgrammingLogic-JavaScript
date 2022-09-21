// Variáveis globais
const min = 0;
const max = 3;
var select = [];
var sort = [];
var cont = 0;


// Função para gerar os números aleatórios que serão as cores
function numberRandom(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
}

function startGame() {
    document.querySelector('.wait').style.display = 'flex';
    document.querySelector('.go').style.display = 'none';

    select = [];
    sort = [];
    cont = 0;

    setTimeout(createColors, 1000);

}

function createColors() {

    document.querySelector('.wait').style.display = 'flex';
    document.querySelector('.go').style.display = 'none';

    let color = "";

    var numberSort = numberRandom(min, max);
    sort.push(numberSort);

    var openColor = 1000;
    var closedColor = 0;

    for(let i = 0; i < sort.length; i++) {
        
        if(sort[i] == 0) {
            color = "blue";
        } else if(sort[i] == 1) {
            color = "red";
        } else if(sort[i] == 2) {
            color = "green";
        } else if(sort[i] == 3) {
            color = "yellow";
        }

        openColor += 1000;
        closedColor = openColor + 1000;

        setTimeout(() => {
            document.getElementById(sort[i]).style.backgroundColor = color;
        }, openColor)

        setTimeout(() => {
            document.getElementById(sort[i]).style.backgroundColor = '';
        }, closedColor)
    }


}

function selectItem(id) {

    console.log('ID SELECT: ' + id);
    select.push(id);
    console.log('ARRAY SELECT: ' + '[' + select + ']');

    



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
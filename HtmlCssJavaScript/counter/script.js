var counter = document.getElementById('counter');
counter.value = 0;

function colorCounter() {
    if(counter.value > 0){
        counter.style.color = 'green';
    } else if (counter.value < 0) {
        counter.style.color = 'red';
    } else {
        counter.style.color = 'black';
    }
}

function inc() {
    counter.value++;
    colorCounter();
}

function dec() {
    counter.value--;
    colorCounter();
}

function resetion(){
    counter.value = 0;
    colorCounter();
}
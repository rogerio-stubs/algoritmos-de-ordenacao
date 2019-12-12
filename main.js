// variáveis de layout
var inputElement = document.querySelector('#entrada input');
// vaiáveis lógicas
var elements = [];

function dataInput(condition) {
    var elements = inputElement.value;
    try {
        for (element of elements) {
            if (isNaN(element)) throw "Digite apenas números"            
        }
        if (condition === 1) {
            selectionSort(elements);
        } if (condition === 2) {
            insertionSort();
        } if (condition === 3) {
            mergeSort();
        }
    }
    catch(err) {
        alert(err);
        inputElement.value = null;
    }
}

function selectionSort(elements) {
    console.log('selectionSort');
    let size = 4; // valor chumbado
    for (let x = 0; x < size; x++) {
        console.log(elements[x]);
    }
    for (let x = 0; x < size; x++) {
        minimun = x;
        for (let y = x + 1; y < size; y++) {
            if (elements[minimun] > elements[y]) {
                minimun = y
            }
        }
        let tmp = elements[x];
        elements[x] = elements[minimun];
        elements[minimun] = tmp;
    }
}

function insertionSort() {
    console.log('insertioSort');
}

function mergeSort() {
    console.log('mergeSort');
}
// variáveis de layout
var inputElement = document.querySelector('#entrada input');
// vaiáveis lógicas
var elements = [];

function dataInput(idx) {
    let tmp = inputElement.value;
    elements = tmp.split("-");
    if (idx === 1) {
        selectionSort();
    } if (idx === 2) {
        insertionSort();
    } if (idx === 3) {
        mergeSort();
    }
}

function selectionSort() {
    console.log('selectionSort');
}

function insertionSort() {
    console.log('insertioSort');
}

function mergeSort() {
    console.log('mergeSort');
}
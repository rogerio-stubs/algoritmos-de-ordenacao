// variáveis de layout
var inputElement = document.querySelector('#entrada input');
// vaiáveis lógicas
var elements = [];

function dataInput(condition) {
    let tmp = inputElement.value;
    elements = tmp.split(" ");
    try {
        for (element of elements) {
            if (isNaN(element)) throw "Digite apenas números"
            if ((element === "-0") || (element === "+0")) throw "Esse número não é válido"
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
    let size = elements.length;
    for (let x = 0; x < size; x++) {
        minimun = x;
        for (let y = x + 1; y < size; y++) {
            if (elements[minimun] > elements[y]) {
                console.log(elements[minimun], '>', elements[y]);
                minimun = y
            }
        }
        let tmp = elements[x];
        elements[x] = elements[minimun];
        elements[minimun] = tmp;
    }
    console.log(elements);
}

function insertionSort() {
    console.log('insertioSort');
}

function mergeSort() {
    console.log('mergeSort');
}

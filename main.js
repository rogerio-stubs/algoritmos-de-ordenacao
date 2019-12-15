// variáveis de layout
var inputElement = document.querySelector('#entrada input');
// vaiáveis lógicas
var elements = [];
var list = [];

function dataInput(condition) {
    let tmp = inputElement.value;
    list = tmp.split(" ");
    try {
        for (let idx = 0; idx < list.length; idx++) {
            if (isNaN(list[idx])) throw "Digite apenas números"
            if ((list[idx] === '-0') || (list[idx] === '+0')) throw "Esse número não é válido"
            let convert = list[idx];
            elements[idx] = parseInt(convert);
        }
        if (condition === 1) {
            selectionSort(elements);
        } if (condition === 2) {
            insertionSort(elements);
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
                minimun = y
            }
        }
        let tmp = elements[x];
        elements[x] = elements[minimun];
        elements[minimun] = tmp;
    }
    console.log('elementos ordenados: ', elements);
}

function insertionSort(elements) {
    console.log('insertioSort');
    let size = elements.length;
    for (let idx = 1; idx < size; idx++) {
        let key = elements[idx];
        let tmp = idx - 1;
        while (tmp >= 0 && elements[tmp] > key) {
            elements[tmp+1] = elements[tmp];
            tmp--;
            elements[tmp+1] = key;
        }
    }
    console.log('elementos ordenados: ', elements);
}

function mergeSort() {
    console.log('mergeSort');
}
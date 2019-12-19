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
            console.log(selectionSort(elements));
        } if (condition === 2) {
            console.log(insertionSort(elements));
        } if (condition === 3) {
            console.log(mergeSort(elements));
        }
    }
    catch(err) {
        alert(err);
        inputElement.value = null;
    }
}

function selectionSort(elements) {
    for (let idx = 0; idx < elements.length; idx++) {
        let down = idx;
        for (let y = idx + 1; y < elements.length; y++) {
            if (elements[down] > elements[y]) {
                down = y
            }
        }
        let tmp = elements[idx];
        elements[idx] = elements[down];
        elements[down] = tmp;
    }
    return elements;
}

function insertionSort(elements) {
    for (let idx = 1; idx < elements.length; idx++) {
        let key = elements[idx];
        let tmp = idx-1;
        while (tmp >= 0 && elements[tmp] > key) {
            elements[tmp+1] = elements[tmp];
            elements[tmp] = key;
            tmp--;
        }
    }
    return elements;
}

function merge(left, right) {
    let arr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return arr.concat(left.slice().concat(right.slice()));
}

function mergeSort(elements) {
    if (elements.length < 2) {
        return elements;
    }

    const middle = Math.floor(elements.length / 2);
    const left = elements.slice(0, middle);
    const right = elements.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}


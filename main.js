/* ## LOGICA ## */
var inputElement = document.getElementById('arrInput')
var elements = [];
var list = [];
var condition;

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
        if (condition === 'selectionSort') {
            selectionSort(elements);
        } if (condition === 'insertionSort') {
            renderArr(elements, condition);
            insertionSort(elements);
            renderArr(elements, condition);
        } if (condition === 'mergeSort') {
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
        renderArr(elements, 'selectionSort');
        let down = idx;
        // marcar como vermelho a variáve down (primeira);
        setColorRed(down);
        for (let y = idx + 1; y < elements.length; y++) {
            // Percorre o array e pisca a acor azul
            setInterval(setColorBlue, y, elements.length);
            if (elements[down] > elements[y]) {                
                down = y
            }
        }
        // marca de verde down
        setColorGreen(down);
        let tmp = elements[idx];
        elements[idx] = elements[down];
        elements[down] = tmp;
    }
    return elements;
}

function insertionSort(elements) {
    for (let idx = 1; idx < elements.length; idx++) {
        renderArr(elements, 'insertionSort');
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


/* ## LAYOUT ## */
function renderArr(elements, condition) {
    if (condition === 'selectionSort') {
        var divElement = document.getElementById('selectionSort');
    }
    if (condition == 'insertionSort') {
        var divElement = document.getElementById('insertionSort');
    }
    if (condition == 'mergeSort') {
        var divElement = document.getElementById('mergeSort');
    }
    let tableElement = document.createElement('table');
    tableElement.setAttribute('class', 'table');
    let trElement = document.createElement('tr');

    tableElement.appendChild(trElement);

    for (let idx = 0; idx < elements.length; idx++){
        let tdElement = document.createElement('td');
        let tdValue = document.createTextNode(elements[idx]);
        tdElement.setAttribute('id', idx);
        tdElement.appendChild(tdValue);
        trElement.appendChild(tdElement);        
    }
    divElement.appendChild(tableElement);
}

function setColorRed(down) {
    // pega o primeiro elemento com aquele id
    document.getElementById(down).style.backgroundColor = "#FF0000";
}

function setColorBlue(begin, size) {
    return 1;
}

function setColorGreen(success) {
    document.getElementById(success).style.backgroundColor = "#00FF00";
}
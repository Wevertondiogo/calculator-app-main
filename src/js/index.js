// Elements
const buttons = document.querySelectorAll('.btn');
const value1 = document.querySelector('.value1');
const value2 = document.querySelector('.value2');
const operator = document.querySelector('.operator');

const btnResult = document.querySelector('#btnResult');
const btnReset = document.querySelector("#btnReset");
const btnDel = document.querySelector("#btnDel");




let result;


function setValuesInElements(props) {
    const convertToNumber = Number(props);

    if ((!isNaN(convertToNumber) || props === '.') && !operator.innerText && !value2.innerText) {
        value1.innerText += props

    } else if (isNaN(convertToNumber) && value1.innerText) operator.innerText += props;

    else if (!isNaN(convertToNumber) || props === '.' && operator.innerText) {
        value2.innerText += props;
    }
}


function calc() {

    const convertValue1 = parseFloat(value1.innerText);
    const convertValue2 = parseFloat(value2.innerText);


    switch (operator.innerText) {
        case '+':
            result = convertValue1 + convertValue2;
            break;

        case '-':
            result = convertValue1 - convertValue2;
            break;

        case '/':
            result = convertValue1 / convertValue2;
            break;

        case 'X':
            result = convertValue1 * convertValue2;
            break;


    }

    value2.innerText = '';
    operator.innerText = '';

    if (result) value1.innerText = result.toLocaleString();

}

function reset() {
    value1.innerText = '';
    value2.innerText = '';
    operator.innerText = '';
}

function remove() {
    if (value1.innerText && !operator.innerText && !value2.innerText) {
        const removeLastValue = value1.innerText.slice(0, -1);
        value1.innerText = removeLastValue;
    } else if (operator.innerText && !value2.innerText) {
        const removeLastValue = operator.innerText.slice(0, -1);
        operator.innerText = removeLastValue;
    } else {
        const removeLastValue = value2.innerText.slice(0, -1);
        value2.innerText = removeLastValue;
    }
}


buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        const valueInnerText = event.target.innerText

        if (valueInnerText !== "=" && valueInnerText !== "DEL" && valueInnerText !== "RESET") {
            setValuesInElements(valueInnerText);
        }

    })
})


btnResult.addEventListener('click', calc)
btnReset.addEventListener('click', reset)
btnDel.addEventListener('click', remove);
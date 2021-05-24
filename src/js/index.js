// Elements
const buttons = document.querySelectorAll('.btn');
const value1 = document.querySelector('.value1');
const value2 = document.querySelector('.value2');
const operator = document.querySelector('.operator');
const seeResult = document.querySelector('#seeResult');
const btnReset = document.querySelector("#btnReset");



let result;


function setValuesInElements(props) {
    const convertToNumber = Number(props);

    if (!isNaN(convertToNumber) && !operator.innerText && !value2.innerText) {
        value1.innerText += convertToNumber;
    } else if (isNaN(convertToNumber) && value1.innerText) operator.innerText += props;

    if (!isNaN(convertToNumber) && operator.innerText) {
        value2.innerText += convertToNumber;
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

    if (result) value1.innerText = result;

}

function reset() {
    value1.innerText = '';
    value2.innerText = '';
    operator.innerText = '';
}


buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        const valueInnerText = event.target.innerText

        if (valueInnerText !== "=" && valueInnerText !== "DEL" && valueInnerText !== "RESET") {
            setValuesInElements(valueInnerText);
        }

    })
})

seeResult.addEventListener('click', calc)
btnReset.addEventListener('click', reset)
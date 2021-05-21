const buttons = document.querySelectorAll('.btn');
const values = document.querySelector('.values');

const KEY_VALUE = "value";
const KEY_OPERATOR = "operator"

buttons.forEach(btn => {
    btn.addEventListener('click', event => {

        const convertForNumber = Number(event.target.innerText);

        if (isNaN(convertForNumber)) {
            localStorage.setItem(KEY_OPERATOR, event.target.innerText);
        } else localStorage.setItem(KEY_VALUE, convertForNumber);

        //const arrayValues = Array.from(values.innerText)

        if (getValue() && !getOperator()) {
            values.textContent += getValue();
        } else if (getValue() && getOperator()) {
            values.textContent += getOperator();
            localStorage.removeItem(KEY_OPERATOR)
        }


        //getLastValueOfArray(arrayValues)

    })
})

const getValue = () => localStorage.getItem(KEY_VALUE);

const getOperator = () => localStorage.getItem(KEY_OPERATOR);

const getLastValueOfArray = array => Number(array[array.length - 1])
const btnRun = document.querySelector('#btnSubmit');
const result = document.querySelector('#result');

function getValue() {
    let inputStr = document.querySelector('#inputString').value;

    inputStr = inputStr.toLowerCase().replace(/[^a-zA-Z]/gi, "");

    let revStr = generateRevString(inputStr);

    displayStr(inputStr, revStr);
}

function generateRevString(inputStr) {
    return inputStr.split('').reverse().join('');
}

function displayStr(inputStr, revStr) {
    result.innerHTML = (inputStr == revStr) ? `It's a palindrome! ${revStr}` : `Not a palindrome! ${revStr}`;
}

btnRun.addEventListener('click', getValue);
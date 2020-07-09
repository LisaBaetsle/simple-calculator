function calculate() {
    let number1 = parseInt(document.getElementById("nr1").value);
    let number2 = parseInt(document.getElementById("nr2").value);
    let operator = document.getElementById("calc").value;
    let result;
    if (operator == '+') {
        result = number1 + number2;
    } 
    else if (operator == '-') {
        result = number1 - number2;
    } 
    else if (operator == '*') {
        result = number1 * number2;
    } 
    else if (operator == '/') {
        result = number1 / number2;
    }
    if (result == 'NaN' || result == '+Infinity' || result == '-Infinity') {
        result = 'n/a'
    }
    document.getElementById("result").innerHTML = result;
}

document.getElementById("equal").addEventListener("click", calculate);
function calculate() {
    let number1 = document.getElementById("nr1").value;
    let number2 = document.getElementById("nr2").value;
    let operator = document.getElementById("calc").value;
    let result;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    } else {
        result = "n/a";
    }
    document.getElementById("result").innerHTML = result;
}

document.getElementById("equal").addEventListener("click", calculate);
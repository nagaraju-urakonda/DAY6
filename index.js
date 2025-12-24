function changename() {
    document.getElementById("h1").innerText="nagaraju urakonda"
}
function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = result;
}
function subtract() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML = result;
}
function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML = result;
}
function divide() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) / parseInt(num2);
    document.getElementById("result").innerHTML = result;
}
function modulus() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) % parseInt(num2);
    document.getElementById("result").innerHTML = result;
} 

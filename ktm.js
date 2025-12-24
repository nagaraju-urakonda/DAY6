function convert() {
    var km = document.getElementById("km").value;
    var miles = km * 0.621371;
    document.getElementById("result").innerHTML = miles + " miles";
}
function convertPounds() {
    var kg = document.getElementById("kg").value;
    var pounds = kg * 2.20462;
    document.getElementById("result2").innerHTML = pounds + " pounds";
}
function simpleIntrest() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var time = document.getElementById("time").value;
    var simpleIntrest = (principal * rate * time) / 100;
    document.getElementById("result3").innerHTML = simpleIntrest + " simple intrest";
}
function validator() {
    var number = document.getElementById("mobile").value;

    if (number.length !== 10) {
        document.getElementById("result4").innerHTML = console.log(alert("Invalid mobile number"));
    } else {
        document.getElementById("result4").innerHTML = "Valid mobile number";
    }
}

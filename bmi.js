function calculateBMI() {
    var weight = Number(document.getElementById("weight").value);
    var heightCm = Number(document.getElementById("height").value);
    var heightM = heightCm / 100;

    if (!weight || !heightCm) {
        alert("Please enter valid height and weight");
        return;
    }

    var bmi = (weight / (heightM * heightM)).toFixed(2);
    document.getElementById("bmiValue").innerHTML = "Your BMI: " + bmi;

    var result = document.getElementById("bmiResult");
    var image = document.getElementById("foodImage");
    var text = document.getElementById("foodText");

    // ✅ COLORFUL IMAGES (You can change ONLY these URLs if you want)
    if (bmi < 18.5) {
        result.innerHTML = "Underweight";
        result.style.background = "#f6e58d";
        image.src = "https://images.unsplash.com/photo-1604908177522-432f8b07cba3";
        text.innerHTML = "Eat high-calorie foods like bananas, nuts, milk 🍌🥜🥛";
    } 
    else if (bmi <= 24.9) {
        result.innerHTML = "Normal Weight";
        result.style.background = "#6ab04c";
        image.src = "https://images.unsplash.com/photo-1498837167922-ddd27525d352";
        text.innerHTML = "Balanced diet with fruits & vegetables 🥗🍎";
    } 
    else if (bmi <= 29.9) {
        result.innerHTML = "Overweight";
        result.style.background = "#f0932b";
        image.src = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd";
        text.innerHTML = "Low-calorie healthy foods like salads 🥦🥒";
    } 
    else {
        result.innerHTML = "Obesity";
        result.style.background = "#eb4d4b";
        image.src = "underweight.jpg";
        text.innerHTML = "Strict diet & healthy meals recommended ⚠️";
    }
}

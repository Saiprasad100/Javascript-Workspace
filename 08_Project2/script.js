 function calculateBMI() {
            let height = document.getElementById("height").value;
            let weight = document.getElementById("weight").value;
            let results = document.getElementById("results");

            if (height === "" || weight === "" || isNaN(height) || isNaN(weight)) {
                results.innerHTML = "Please enter valid values!";
                results.style.color = "red";
                return;
            }

            let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

            let message = "";
            if (bmi < 18.6) {
                message = `Your BMI is ${bmi}. You are Underweight.`;
            } else if (bmi >= 18.6 && bmi <= 24.9) {
                message = `Your BMI is ${bmi}. You are in the Normal Range.`;
            } else {
                message = `Your BMI is ${bmi}. You are Overweight.`;
            }

            results.innerHTML = message;
            results.style.color = "#fff";
        }
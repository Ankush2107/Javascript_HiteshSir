const form = document.querySelector('form');

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.getElementById("results");

    if (isNaN(weight) || isNaN(height)) {
        document.getElementById("results").innerHTML = "Please enter valid values.";
        return;
    }
      
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // Round BMI to 2 decimal places
      
    let results = "Your BMI is " + bmi + ". ";
      
    if (bmi < 18.5) {
      results += "You are underweight.";
    } 
    else if (bmi >= 18.5 && bmi < 25) {
        results += "You are in the healthy weight range.";
    } 
    else if (bmi >= 25 && bmi < 30) {
        results += "You are overweight.";
    } 
    else {
        results += "You are obese.";
    }

    // show the result
    document.getElementById("results").innerHTML = results;
    
});

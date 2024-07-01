function calculateBMI(weight, height) {
    // Write your code here
    let absh = Math.abs(height);
    let absw = Math.abs(weight);
    const bmi = absw / (absh * absh);

    if (bmi < 18.5) {
        return "Underweight";
    } 
    if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } 
    if (bmi >= 24.9 && bmi < 29.9) {
        return "Overweight";
    } if(bmi >= 29.9) {
        return "Obese";
    }
}



// If BMI is less than 18.5, the person is classified as "Underweight".
// If BMI is between 18.5 (inclusive) and 24.9 (exclusive), the person is classified as "Normal weight".
// If BMI is between 25 (inclusive) and 29.9 (exclusive), the person is classified as "Overweight".
// If BMI is 29.9 or higher, the person is classified as "Obese".
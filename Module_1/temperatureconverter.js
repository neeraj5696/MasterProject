function convertTemperature(temperature, unit) {
    // Write your code here
    if (unit === "C") {
        const fahrenheit = ((9*temperature)/5)+32;
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        const celsius = (((temperature - 32)/9)*(5));
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}
console.log(convertTemperature(-212, "F"))
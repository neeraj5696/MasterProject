function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2));
}

console.log(calculateTip(100, .15))
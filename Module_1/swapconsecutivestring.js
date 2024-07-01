function swapConsecutiveCharacters(str) {
    // Write your code inside this function only.
    let emp = [];
    let arr= str.split("")
    for( let i = 0; i <  arr. length; i+=2){
        let temp =arr[i];
        arr[i]=arr[i+1];
        arr[i+1]= temp;
        emp.push(arr[i]);
        emp.push(arr[i+1])
    }


return emp.join("")



}

let str=  "AlmaBetter"
// Output: "lAameBttre"
console.log(swapConsecutiveCharacters(str))
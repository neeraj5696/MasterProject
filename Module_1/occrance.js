let str = "helllo are you"
function countOccurrences(str, char) {
    // Write your code here
    let strr= str.split('')
    let count = 0;
    for (let i =0; i<strr.length ; i++) {
        if (strr[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countOccurrences(str, 'l'))
function findLongestWord(sentence) {
    // Write your code here
const words = sentence.split(' ');
console.log(words)
let maxLength = 0;

for (dj of words) {
    let length = dj.length;
    if (length > maxLength) {
        maxLength = length;
    }
}

return maxLength;
}
console.log(findLongestWord("how are you soing"))
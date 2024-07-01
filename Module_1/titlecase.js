function titleCase(sentence) {
    // write your code here
const words = sentence.toLowerCase().split(' ');
let dj =words.map(x=> x[0].toUpperCase().concat(x.slice(1)))
return dj.join(" ")


}
console.log(titleCase("hello how are you"))




function titleCasee(sentence) {
	// write your code here
    const words = sentence.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');
}
console.log(titleCasee("how are you"))
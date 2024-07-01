function findMove(s) {
    let emp = [];
    
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '+' && s[i + 1] === '+') {
            let newState = s.substring(0, i) + '--' + s.substring(i + 2);
            emp.push(newState);
        }
    }
    
    return emp;
}




// Example usage:
console.log(findMove("++++")); // ["--++", "+--+", "++--"]
console.log(findMove("+--+")); // []
console.log(findMove("++--++")); // ["--+--++", "++----"]

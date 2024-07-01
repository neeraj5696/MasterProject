function shortestDistance(wordsDict, word1, word2) {
    // Write your code inside this function only.
    let count  = 0;
    

    for( let i = wordsDict.indexOf(word1); i<wordsDict.length; i++){

        if( wordsDict[i]== word1){
            count =0
        }
        if (wordsDict[i] !== word2){
            count++
        }
    }
    return count


}

const wordsDict = ["apple", "banana", "cherry", "apple", "date", "banana", "fig"];

// Input: wordsDict, "apple", "fig"
// Output: 3



console.log(shortestDistance(wordsDict, "apple", "fig"))
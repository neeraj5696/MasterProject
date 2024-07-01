function transitionPoint(arr) {
     let position = -1
    // Write your code inside this function only.
    for( let i = 0; i < arr.length-1; i++){
        if( arr[i] !== arr[i+1])
            return position= i+1
           
    }
    return position


}

let  arr = [0,0,0,0,0]
// Output: 3
console.log(transitionPoint(arr))
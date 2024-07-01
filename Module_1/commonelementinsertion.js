let array1= [1, 2, 2, 3, 4, 5], array2 = [2, 3, 3, 6]
// Output: [2, 3]

function arrayIntersection(array1, array2) {
    // Write your code inside this function only.
    let emp = [];

    for( let i = 0; i < array1.length; i ++){
        for( let j = 0 ; j< array2.length ; j ++){
            if( (array1[i] == array2[j]) && (array1[i] != array1[i+1]) && ( array1[j] != array1[j+1])){
                emp.push(array1[i])
            }
        }
    }
    return emp;


}
 console.log(arrayIntersection(array1, array2))
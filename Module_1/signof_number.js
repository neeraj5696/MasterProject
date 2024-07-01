function checkSign(num1, num2, num3) {
    // Write your code inside this function only.
     let arr = [num1, num2, num3];
     let empty = "" ;
     for( let i = 0; i<arr.length;i++){
        if(arr[i]>0){
           empty= empty+"+"

        }else{
          empty=  empty+"-"
        }
     }
     return empty.split().join()
}

console.log(checkSign(-1,-2,-3))
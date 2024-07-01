let nums = [-2,-1,-1,1,2,3]
// Output: 3

function maxCount(nums) {
    // Write your code inside this function only.

    let pos = []; 
    let net = []; 
    for ( let i = 0; i<nums.length;  i++){
        if( nums[i]>  0){
            pos.push(nums[i])
        }
        if( nums[i] < 0){
            net.push(nums[i])
        }
    }
    if( pos.length > net.length ){
        return pos.length;
    } else{
         return net.length;
    }


}

console.log(maxCount(nums))
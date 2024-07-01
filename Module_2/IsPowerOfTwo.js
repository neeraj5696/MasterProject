function isPowerOfTwo(n) {
    
    return n > 0 && (n & (n - 1)) === n;
}

console.log(isPowerOfTwo(16))



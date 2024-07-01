function findPrimes(n) {
  // Write your code here
  let empp = [];
  function listprime(n) {
    let emp = [2];

    for (let i = 3; i < n * n; i = i + 2) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          break;
        }
      }
      emp.push(i);
    }
    return emp;
  }
  let zz = listprime(n);

  for (let k = 0; k < zz.length; k++) {
    if (zz[k] < n) {
      empp.push(zz[k]);
    }
  }
  return empp;
}
console.log(findPrimes(20));

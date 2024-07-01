let str = "Hello World and Universe!";
// Output: "Hello W7orld an7d Unive7rse!"

function insert7(str) {
  //   Write your code inside this function only.
  let dsj= ""

  for (let i = 7, j=0; i<str.length, j < str.length; j+=6,i+=6) {
     dsj = dsj + "7" +str.slice(j, i);

  }
  return dsj
}

console.log(insert7(str));

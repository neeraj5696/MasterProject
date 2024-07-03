let operations =  ["5","-2","4","C","9","D"]

var callPoints = function(operations) {
    let emp = [];
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "+") {
         let   sum = parseInt(operations[i - 2]) + parseInt(operations[i - 1]);
            emp[i] = sum;
        }
         else if (operations[i] === "D") {
          let  newD = parseInt(operations[i - 1]) * 2;
            emp[i] = newD;
        }
        else if (operations[i] === "C") {
            emp.pop();
           
          
            
        } 
        else {
            emp.push( operations[i])
        }
    }

      // to calculate the totalSum only
      return emp
  };

  console.log(callPoints(operations))
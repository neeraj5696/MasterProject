let operations =  ["5","-2","4","C","9","D", "+"]

var callPoints = function(operations) {
    let emp = [], sum=0
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "+") {
            sum = parseInt(emp[emp.length-1]) + parseInt(emp[emp.length-2]);
            emp.push(sum);
        }
         else if (operations[i] === "D") {
          let  newD = parseInt(operations[i - 1]) * 2;
            emp.push(newD);
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
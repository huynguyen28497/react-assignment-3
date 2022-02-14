function backtrack(A, currentTotal, total) {
    if (currentTotal == total) {
      console.log(A);
    } else if (currentTotal < total) {
      A.push(1);
      backtrack(A, currentTotal + 1, total);
      A.pop();
  
      A.push(2);
      backtrack(A, currentTotal + 2, total);
      A.pop();
    }
  }

  const A = [];
  //input buyers
  const total = 5;
  console.log("Input: ", total);
  backtrack(A, 0, total);
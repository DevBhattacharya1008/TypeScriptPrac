function addNHandle(n1: number, n2: number, cb: (number: number) => void ) {
  const result =  n1 + n2;
  cb(result);
}

function printNumber(n: number){
    console.log("The number is: " + n);
}

addNHandle(10, 30, (result) => printNumber(result));
let d=Number(prompt("number"));
let n=d%10;
let m=(d-n)/10;
let k=(m-m%10)/10;
console.log("Result: "+k+","+m%10+","+n);

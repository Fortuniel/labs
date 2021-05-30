'use strict';
let A;
let B;
let C;

function inputAsking()
{
  A = +prompt('Enter the first number', 12);
  B = +prompt('Enter the second number', 3);
  C = prompt('Enter operation sign', "-"); 
  while (true)
  {
    if (Number.isInteger(A) && Number.isInteger(B))
    {
      alert("The values are correct");
      return;
    }
    else
    {
      alert("Write the correct values");
      inputAsking();
    }
  }
}
function calculator(A, B, C)
{
  switch (C)
  {
    case '+':
    return A + B;
    case '-':
    return A - B;
    case '*':
    return A * B;
    case '/':
    return A / B;
    default:
    alert("Write only +-*/ values")
  }
}
inputAsking();
alert(calculator(A, B, C));
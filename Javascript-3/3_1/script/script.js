'use strict';
let A = +prompt('Enter the first number');
let B = +prompt('Enter the second number');
let С = prompt('Enter operation sign'); 

function calculator(A, B, С)
{
    switch (С) 
    {
        case '+':
        return A + B;
        case '-':
        return A - B;
        case '*':
        return A * B;
        case '/':
        return A / B;
    }
}
alert(calculator(A, B, С));
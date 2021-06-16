let a,
    b;
do
{
    do
    {
	    a = prompt("Enter the first number");
    }
    while(a != parseInt(a, 10));
    do
    {
	    b = prompt("Enter the second number");
    }
    while(b != parseInt(b, 10));
}
while(a>b);
function sNumbers(a, b)
{
    let res = [];
    for(let i = a, flag = false; i <= b; i++, flag = 0)
    {
        for(let j = 2; j * 2 <= i; j++)
        {
            if(i % j == 0)
            {
                flag = true;
                break;
            }
        }
        if(!flag)
            res[res.length] = i;
    }
    return res;
}
console.log(sNumbers(a,b));
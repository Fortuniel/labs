let A=0,
    B=prompt("Enter the number"),
    mas=[];
for(A=1;A<=B;A++)
{
    if(A % 5 == 0)
    {
        mas.push(A);
    }   
}
if(mas.length != 0)
{
    console.log(mas);
}
else
{ 
    console.log('Sorry, no numbers');
}
document.getElementById("pr").onblur = function ()
{
    let tempPrice = +pr.value;
    pr.innerText = tempPrice;    
    if (tempPrice <= 0 || !parseInt(tempPrice))
    {
        document.getElementById('pr1').innerText = `Please enter correct price`;
        document.getElementById('pr').classList.add('pr2');
    } 
    else
    {
        document.getElementById('pr').classList.remove('pr2');
        document.getElementById('pr1').innerText = ``;
        document.getElementById("pr").value = "";
        let spanList = document.getElementById('list1');
        let spanNode = document.createElement('span');
        spanNode.setAttribute('onclick', `removespan(this);`);
        let textNode = document.createTextNode(`Current price: ${tempPrice} $`);
        spanNode.appendChild(textNode);
        spanList.appendChild(spanNode);
    }
};

let removespan = function(span)
{
    span.parentNode.removeChild(span);
};
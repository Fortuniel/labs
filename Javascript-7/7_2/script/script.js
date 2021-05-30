'use strict';
function showList(list)
{
    function arrToUl(root, arr)
    {
        let ul = document.createElement('ul');
        let li;
        root.appendChild(ul);
        arr.forEach(function(item)
        {
            if (Array.isArray(item))
            {
                arrToUl(li, item);
                return;
            }
            li = document.createElement('li');
            li.appendChild(document.createTextNode(item));
            ul.appendChild(li);
        });
    }
    let div = document.getElementById('list1');
    arrToUl(div, list);
    let i = 10;
    let timerId = setInterval(function()
    {
        document.getElementById("tm").innerText = i;
        if (i === 0) {
        document.getElementById('list1').classList.add("empty");
        document.getElementById('tm').classList.add("empty");
        document.getElementById('tm1').classList.add("empty");
        document.getElementById('mas').classList.add("empty");
        }
        i--;
    }, 1000);
}
showList(['Овочі', 'Фрукти', ["Яблуко","Вишня"], 'Випічка', 'Молоко', 'Риба', 'Чай']);
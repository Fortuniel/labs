function showL(list) {
    let arr = [];
    let newArr = [];
    function maps(newObj) {

        for (let key in newObj) {
                arr.push(newObj[key]);
                newArr = arr.map(word => `<li>${word}</li>`);;
                list1.innerHTML = newArr.join('');            
        }
    }
    maps(list);
}
showL( ['1', '2', '3', 'sea', 'user', 23]);
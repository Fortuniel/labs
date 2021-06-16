function filtr(array, dataType)
{
    let outArray = array.filter(function(item)
    {
        return typeof (item) !== dataType ;
    });
    console.log(outArray);
    return outArray;  
}
filtr(['hello', 'world', 23, '23', null], 'string');
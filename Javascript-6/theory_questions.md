## Теоретический вопрос 

1. Опишите своими словами как работает цикл forEach.

## Ответы

1. 
Это цикл перебора массива. Метод forEach перебирает элементы массива, как обычный цикл for. Разница в том, что нельзя использовать оператор break для досрочного выхода, как в for. И этот метод не возвращает значение. 

Как плюс этого цикла я считаю что в нем не нужно объявлять локальные переменные для хранения индекса и значения текущего элемента массива, поскольку они автоматически передаются в функцию обратного вызова (колбек) в качестве аргументов.
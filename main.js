1)
//превратите строку в строку в верхнем регистре 'abc' -> 'ABC'
let text = 'My name is Alexander';

text.toUpperCase()

2)
//превратите строку в строку в нижнем регистре 'ABC' -> 'abc'
let text = 'MY NAME IS ALEXANDER';

text.toLowerCase()

3)
//обьедините две строки 
let a = 'Hello';
let b = ', my friend';

let result = a + b

String(result)

4)
//превратите строку в массив и сделайте так чтобы вся строка стала одним элементом внутри массива
let text = 'My name is Alexander';


let result = text.split(' ')

5)
//превратите строку в массив и сделайте так чтобы все буквы и знаки стали отдельными элементами внутри массива
let text = 'My name is Alexander';

let result = text.split('')

6)
//превратите строку в массив и сделайте так чтобы все слова отделенные пробелом стали отдельными элементами внутри массива
let text = 'My,name,is,Alexander';

let result = text.split(' ')
let result1 = result.join(' ')
let result2 = result1.replace(',', ' ')
String(result2)

7)
//превратите строку в массив и сделайте так чтобы в массив попало только первое слово 'My'
let text = 'My name is Alexander';
//?
8)
//сделайте так чтобы строка ниже выдала в консоли 'OreoOreoOreo'
let pancake = 'Oreo';

let result = pancake.repeat(3)
9)
//выведите в консоли первую букву из строки
let text = 'My name is Alexander';

let result = text[0]

10)
//проверьте наxодится ли строка 'name' в строке ниже
let text = 'My name is Alexander';

if (text['name']) {
    true
} else {
    false
}
11)
//проверьте находится ли строка 'name' в строке после 10 индекса
let text = 'My name is Alexander';

if ('name'[10]) {
    true
} else {
    false
}

12)
//определите индекс первой буквы 'a' в строке

let text = 'My name is Alexander';
text.indexOf('a');

13)
//определите индекс последней буквы 'a' в строке

let text = 'My name is Alexander';
text.indexOf('a', 9);

14)
//определите заканчивается ли строка на 'der'

let text = 'My name is Alexander';
text.endsWith('der')

15)
//определите начинается ли строка на 'na'

let text = 'My name is Alexander';

text.startsWith('na')

16)
//выведите в консоли 'is' из строки ниже с помощью slice()
let text = 'My name is Alexander';

console.log(text.slice(8, -10));

17)
//вырезать и вывести в консоли 'name is' из строки ниже
let text = 'My name is Alexander';

console.log(text.slice(3, -10));

18)
//вырезать и вывести в консоли 'name is' из строки ниже с помощью отрицательных индексов
let text = 'My name is Alexander';

console.log(text.slice(-3, 10));

19)
//из строки ниже вырежте и выведите в консоли 'is' с помощью substring()
let text = 'My name is Alexander';

console.log(text.substring(8, 10));

20)
//вырежте и выведите в консоли 5 символов после первой буквы 'n' из строки ниже
let text = 'My name is Alexander';

console.log(text.substring(4, 9));

21)
//замените 'name' в строке на 'lastname'
let text = 'My name is Alexander';

text.replace('name', 'lastname');

22)
//замените все буквы 'n' в строке на 'S'
let text = 'My name is Alexander';

text.replace('n', 'S');

23)
//используя padEnd() добавьте в конец строки str столько '*' чтобы количество символов в строке стало равно 10
let str = 'name';

console.log(str.padEnd(10, '*'));

24)
//используя padStart() добавьте в начало строки str столько '*' чтобы количество символов в строке стало равно 10
let str = 'name';

console.log(str.padStart(10, '*'));

25)
//удалите пробелы с начала у строки ниже
let str = '     name';

trimStart(str)

26)
//удалите пробелы с конца у строки ниже
let str = 'name     ';

trimEnd(str)

27)
//удалите пробелы с начала и конца у строки ниже
let str = '     name     ';

trim(str)
trimEnd(str)
trimStart(str)

28)
//выведите в консоли длину строки
let text = 'My name is Alexander';

console.log(text.length);

29)
//выведите в консоли только целые числа из строки
let numStr = '23.5rem';

//?

30)
//выведите в консоли число с плавающей точкой (23.5) из строки
let numStr = '23.5rem';

//?
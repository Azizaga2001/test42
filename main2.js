1)
//создайте пустой массив двумя способами
const array = [];
const array = new Array()
2)
//создайте массив со значениями ты, я, мы, они
const array = new Array('ты', 'я', 'мы', 'они')
3)
//создайте пустой массив и добавьте ты, я, мы, они с помощью []
const array = ['ты', 'я', 'мы', 'они'];
4)
//выведите в консоли 'яблоко' из массива
let fruits = ['яблоко', 'ананас', 'киви'];

console.log(fruits[0]);

5)
//поменяйте 'ананас' в массиве на 'виноград'
let fruits = ['яблоко', 'ананас', 'киви'];

fruits[1] = 'виноград'

6)
//создайте массив внутри массива с 3мя пустыми обьектами, числом 49 и строкой 'dollar'
//?
7)
//под каким индексом находится 'ананас'?
let fruits = ['яблоко', 'ананас', 'киви'];
//1
8)
//выведите в консоли длину массива с помощью свойства length
let fruits = ['яблоко', 'ананас', 'киви'];
console.log(fruits.length);
9)
//отсортируйте массив ниже с помощью метода
let numbers = [1, 7, 2, 3, 5];

numbers.filter()

10)
//с помощью перебора for...of выведите в консоли каждый фрукт из массива
let fruits = ['яблоко', 'ананас', 'киви'];

for (let a of fruits) {
    console.log(a);
}

11)
//с помощью перебора forEach выведите в консоли каждый фрукт из массива
let fruits = ['яблоко', 'ананас', 'киви'];

fruits.forEach(param => {
    console.log(param);
});

12)
//добавьте фрукт манго в конец массива ниже
let fruits = ['яблоко', 'ананас', 'киви'];

fruits.push('манго')

13)
//удалите фрукт киви с конеца массива ниже
let fruits = ['яблоко', 'ананас', 'киви'];

fruits.pop('киви')

14)
//добавьте фрукт манго в начало массива ниже
let fruits = ['яблоко', 'ананас', 'киви'];

fruits.unshift('манго')

15)
//удалите фрукт яблоко с начала массива ниже
let fruits = ['яблоко', 'ананас', 'киви'];

fruits.shift('яблоко')

16)
//конвертируйте массив ниже в строку двумя способами
let fruits = ['яблоко', 'ананас', 'киви'];
String(fruits)
fruits.toString()
17)
//выведите в консоли самый последний элемент массива с помощью свойства length 
let fruits = ['яблоко', 'ананас', 'киви', 45];

//?

18)
//вырежте первые два элемента из массива
let fruits = ['яблоко', 'ананас', 'киви'];
//?
19)
//обедините массивы ниже и отсортируйте
let arr1 = [1, 4, 6];
let arr2 = [3, 5, 7];
//?
20)
//создайте копию массива ниже с помощью метода slice
let fruits = ['яблоко', 'ананас', 'киви'];
let newFruits = fruits.slice();
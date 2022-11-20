// Задача №1

// let d = 7;

// console.log('Переменная =',d);

// console.log('Квадрат переменной =',d**2);

// console.log('Куб переменной =',d**3);

// Задача№2

// let a = prompt('Ведите целое число:');

// if(a>0){
//     d = a*2;
//     console.log(d);
//     }else {
//         console.log('Ваше число не положительное, введите положительное число.')
// }

// Задача№3

// let a = prompt('Ведите число:');

// if(a > 0 ){
//     console.log('Положительное');
// } else if (a == 0) {
//     console.log('Ноль');
// } else if (a < 0){
//     console.log('Отрицательное');
// }

// Задача№4

//  number1 = +prompt('Введите первое число;');
//  number2 = +prompt('Введите второе число;');

// if(number1 > number2){
//     console.log(number1 + number2);
// } else if (number1 < number2){
//     console.log(number1 - number2)
// } else if (number1 == number2)
//     console.log('Числа одинаковые');

// Задача№5

// number1 = +prompt('Введите число:');

// if(number1 < 0){
//     console.log(number1 ** 2);
// } else{
//     console.log('Ошибка')
// }

// Задача№6

// schuler = +prompt('Колличество учеников:');
// stuhl = +prompt('Колличество cтульев:');

// if(schuler > stuhl){
//     console.log('Ввод:' + ' ' + schuler + ',' + stuhl + ' ' +  '=>' + ' ' + 'вывод:стульев не хватает.' ) 
// } else if (schuler <= stuhl){
//     console.log('Ввод:' + ' ' + schuler + ',' + stuhl + ' ' +  '=>' + ' ' + 'вывод:стульев хватает.' ) 
// } 

// задача№7

// console.log('Старт:');

// for(let i = 1; i < 10; i++){
//     console.log(i);
// } console.log('Финиш.');

// задача№8

// for(let i = 10; i < 100; i++){
//     if(i % 5 == 0){
//         console.log(i);
//     }
// }

// Задача№9



// a = +prompt('Введите число');
// if (a % 2 == 0) {
// a = a - 1;
// }
// for (i = 1; i <= 7; i++) {
// a = a + 2;
// console.log(a);
// }

// Задача№10

// let array = [12,10,25,33,41,3,5,10,11,12,100,205,201];

// for(let i = 0; i < array.length; i++){
// if(array[i] >= 15){
//     console.log(array[i]);
// }
// }

// Задача№11

// let array = [12,10,25,33,41,3,5,10,11,12,100,205,201];

// for(let i = 0; i < array.length; i++) {
//     if(array[i] % 2 > 0){
//         console.log(array[i]);
//     }
// }

// Задача№12

// let array = [12,10,25,33,41,3,5,10,11,12,100,205,201,21,24,30];

// for(let i = 0; i < array.length; i++) {
//     if(array[i] % 3 == 0){
//         console.log(array[i]);
//     }
// }

// Задача№13

// let array = [21,1,2,3,4,111];
// let sum = 0;
// for(let i = 0; i < array.length; i++){
// if(array[i] == array.indexOf(array[i])){
//     sum = sum + array[i];
// }
// }console.log(sum);

// Задача№14

// let array = [7,6,2,3,4,11];
// let sum = 0;
// for(let i = 0; i < array.length; i++){
// if(array[i] % 2 > 0){
//     sum = sum + array[i];
// }
// }console.log(sum);
// 2
// Задача№15

// let array = [7,6,2,3,4,11];
// let chetniye = 0;
// let ne_chetniye = 0;
// for(let i = 0; i < array.length; i++){
// if(array[i] % 2 > 0){
//     ne_chetniye = ne_chetniye + array[i];
// } if(array[i] % 2 == 0){
//     chetniye = chetniye + array[i];
// }  raznica = chetniye - ne_chetniye;
// }console.log(raznica);

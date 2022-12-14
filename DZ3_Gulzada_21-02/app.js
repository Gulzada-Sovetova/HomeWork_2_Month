//ДЗ-3

/*Задача - 1 
Написать программу "Треугольник в цикле". Программа должна в консоль 
нарисовать следующую фигуру(см. скриншот)
*/
//Код решения
var stars = "";
var age = Number(prompt("Введите количество звёздочек  "))
for (var i = 0; i < age; i++){
    var star = "*";
    stars = stars + star
    console.log(stars);
}

/* Задача - 2
Написать программу FizzBuzz: программа должны вывести числа от 1 до 100 по следующим правилам. 
Если число делится на 3 то вывести Fizz, если число делится на 5 вывести Buzz, если делится и на 3 и на 5, 
то вывести FizzBuzz, иначе вывести просто число. Например: 1 2 Fizz 4 Buzz и т.д.
*/
//Код решения

for (let i = 1; i < 100; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz " + i);
    }
    else if (i%5 === 0) {
    console.log("Buzz " + i);
}   else if (i%3 === 0){
    console.log("Fizz " + i);
}   else {
    console.log(i);
}
}
/* Задача - 3
Написать функцию, которая подсчитывает вхождение определенного символа в строке. 
Например: CountChar("Abrakadabra", "a") -> 5, CountChar("Hello world", "o") -> 2 и т.д.
Причем считаются как маленькие, так и большие буквы.
*/
//Код решения

function ABC() {
  let stringWord = prompt("Введите любой текст : ");
  let search = prompt("Введите букву, которую хотите найти : ");
  let searchUpperCase = search.toLocaleUpperCase();
  let searchLowerCase = search.toLowerCase();
  let sum_s = 0;
  for (const item of stringWord) {
    if (
      search === item ||
      searchUpperCase === item ||
      searchLowerCase == item
    ) {
      sum_s += 1;
    }
  }
  console.log("Сумма =>", search, "равна", sum_s);
}
ABC();

/* Задача - 4
Напишите функцию капитализации строк. Капитализация - это механизм форматирования строки, 
так что бы первая буква была заглавной, а остальные строчные. Выглядит он так:  
CapitalizeString("еВГЕНИЙ") -> "Евгений", CapitalizeString("КиСеЛеВ") -> "Киселев".
Очень частый алгоритм для обработки клиентских данных.
*/
//Код решения
function capitalizeFunction() {
    let words_1 = "KOJIHUIGYFU";
    let len = words_1.length;
    console.log(len);
    let words_toLowerCase = words_1.toLowerCase();
    let wordsToLocaleUpperCase_1 = words_toLowerCase[0].toLocaleUpperCase();
    let wordsToLocaleUpperCase_2 = words_toLowerCase.substring(1, len);
    console.log("Слово : " + wordsToLocaleUpperCase_1 + wordsToLocaleUpperCase_2);
  }
  capitalizeFunction();
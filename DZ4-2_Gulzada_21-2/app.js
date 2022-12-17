
/*Написать мини-проект "Лото" как показано на скриншоте. 
Нужно генерировать случайных 5-6 чисел от 1 до 100 и выводить их на интерфейс, генерация новых чисел вызывается по нажатию на кнопку.*/

//Код решения

const circle1 = document.querySelector("#round_1");
const circle2 = document.querySelector("#round_2");
const circle3 = document.querySelector("#round_3");
const circle6 = document.querySelector("#round_6");
const circle4 = document.querySelector("#round_4");
const circle5 = document.querySelector("#round_5");

const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    circle1.innerHTML = Math.floor(Math.random() * 100 - 0 + 1);
    circle2.innerHTML = Math.floor(Math.random() * 100 - 0 + 1);
    circle3.innerHTML = Math.floor(Math.random() * 100 - 0 + 1);
    circle4.innerHTML = Math.floor(Math.random() * 100 - 0 + 1);
    circle5.innerHTML = Math.floor(Math.random() * 100 - 0 + 1);
    circle6.innerHTML = Math.floor(Math.random() * 100 - 0 + 1);

});
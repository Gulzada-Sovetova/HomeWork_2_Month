/* Написать мини-проект "Счетчик" как показано на скриншоте.
Нужно просто увеличивать или уменьшать на единицу число. Дизайн можете сделать какой сами пожелаете.
Но главное чтобы вся логика работала. Можете при уменьшении, если дошли до нуля, больше не уменьшать
счетчик или же можно реализовать следующую логику: если число 0 то цвет текста серый, если число положительное 
то цифра зеленая, а если отрицательная то красная (один вариант на выбор)
*/
//Код Решения


const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
const box = document.querySelector("#box");
var i = 0;

add.addEventListener("click", function(){
    i++;
    output.innerText = i;
    if(i > 0){
        box.style.background = "lightseagreen";
    }
} );

subtract.addEventListener("click", function(){
    i--;
    output.innerText = i;
    if(i < 0){
        box.style.background = "red";
    }
} );

btn.addEventListener("click", function(){
    i = 0
    output.innerHTML = i;
    if (i === 0){
        box.style.background = "blue"
    }
});



/* Написать функцию с переменным числом аргументов, 
которая считает среднее арифметическое из параметров функции.
Пример: mean(5,4,8,1) -> 4.5, mean(1,1,1,1) -> 1*/

//Код решения
function average(numbers) {
    let sum = numbers.reduce((acc, curr) => acc + curr, 0)
    let length = numbers.length;
    let result = sum / length;
    console.log(result);
}
let numbers = [2, 8, 9, 10, 15, 47]
average(numbers)
  
  
  // С помощью метода массивов изученного на уроке проверить что в ИНН все символы являются числами
  //Код решения
  
var abc = 'abc'

var iNN = [prompt('Введите ИНН')]
function check(arr) {
    let result = arr.every(Number)
    console.log(result);
}
check(iNN)
  
  /*
  Написать мини-проект "Авторизация". Требования следующие: надо создать функцию-конструктор User, 
  которая создает объект со следующими полями: логин, пароль и имя пользователя; 
  создать массив пользователей через  ключевое слово new как это сделано на уроке со счетами; 
  создать интерфейс авторизации (дизайн выбираете какой угодно); при нажатии на кнопку "войти" 
  искать по логину и паролю пользователя в массиве; если найден то выводим куда-нибудь имя пользователя,
  иначе выводим ошибку авторизации
  */
  //Код решения
  
  let users = [
    new user('Anna', 'Anna1987', '254985'),
    new user('Olga', 'OlgaSt', '252554'),
    new user('Nurai', 'NuraiOmurbek', '252654')
]
    let login = document.querySelector('#login')
    let password = document.querySelector('#password')
    let username = document.querySelector('#username')
    let button = document.querySelector('#btn').addEventListener('click', (e) => {
    e.preventDefault()
    let user = users.find(u => u.login === login.value && u.password === password.value && u.username === username.value)
    user ? alert(`Здравстуйте ${user.username}`) : alert('Error')
})


function user(login, password, username) {
    this.login = login,
        this.password = password,
        this.username = username
}

  
  
  

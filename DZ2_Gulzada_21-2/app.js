/*ДЗ-2
Задание - 1
Создать объект банковской карты со следующими полями: Номер карты(строка), 
Дата окончания(строка), Имя владельца(строка), Тип карты(строка), CVC(число). 
CVC это трехзначный код на обратной стороне карты. Только реальные данные не 
отправляйте в домашке, это конфиденциальная информация)) 
*/
//Код решения

// var customer = {
//         PAN: '4115 8654 5214 5214',
//         CVC: 658,
//         Owner: "Oleg Mishustin",
//         ExpiryDate: "05/25",
//         CardType: "VISA",
// };
//  console.log(customer);

///////////////////////////////////////////////////////////
// var customerCardType = customer.Card.CardType;
// if(customerCardType === "VISA"){
//     console.log("Send request to VISA processing");
// }else if (customerCardType === "MasterCard"){
//     console.log("Send request to MasterCard processing");
// } else if (customerCardType === "Elcard"){
//     console.log("Send request to Elcard processing");
// }else{
//     console.warn("Invalid processing name")
// }

/*
Задание - 2
Создать объект банковского филиала: Код(число), Название(строка), График работы (строка),
Работает ли точка вечером (логический), Адрес филиала (объект) со следующими полями: Город (строка), 
улица (строка), дом(строка)
*/
//Код решения

// var bank = {
//     code: 485,
//     nameBank: "Optima",
//     shift: "24/7",
//     nowWorks: true,
//     bankPlace:{
//         city: "Bishkek",
//         street: "Akhunbaeva",
//         homeNum: 2,

//     }
// }
// console.log(bank);

/*
Задание - 3
У нас имеется 4 системы быстрых денежных переводов: Unistream, RIA, Contact, 
MoneyGram. По аналогии со светофором (писали на уроке) реализовать логику отправки денег 
(можно просто писать в консоли что деньги отправлены определенной системой)
*/
//Код решения

// var moneyTransfer = Number(prompt("1.Unistream , 2.RIA , 3.Contact ,4. MoneyGram "));
//     if(moneyTransfer === 1) {
//         console.log("Unistrim");
//     }
//     else if(moneyTransfer === 2) {
//         console.log("Ria");
//     }
//     else if(moneyTransfer === 3) {
//         console.log("Contact");
//     }
//     else if(moneyTransfer === 4) {
//         console.log("MoneyGram");
//     } else{
//         console.warn(Error);
//     }


/*
Задание - 4
Написать программу конвертер арабских чисел (от 1 до 9) в римские. Например: пользователь вводит 4 -> IV, 9 -> IX  и т.д.
Последние 2 задания подумайте через что будет лучше реализовать: if..else или switch..case
*/
//Код решения

// var num = Number(prompt("1-I , 2-II , 3-III , 4-IV , 5-V , 6-VI , 7-VII , 8-VIII , 9-IX "));
//     if(num === 1){
//         console.log("I");
//     }
//     else if(num === 2){
//         console.log("II");
//     }
//     else if(num === 3){
//         console.log("III");
//     }
//     else if(num === 4){
//         console.log("IV");
//     }
//     else if(num === 5){
//         console.log("V");
//     }
//     else if(num === 6){
//         console.log("VI");
//     }
//     else if(num === 7){
//         console.log("VII");
//     }
//     else if(num === 8){
//         console.log("VIII");
//     }
//     else if(num === 9){
//         console.log("IX");
//     }else {
//         console.warn(Error);
//     }


/*
Задание - 5
Создайте переменную customerType. В нее положите либо 1, либо 2. Тип клиента: 1 - физическое лицо, 2 - юридическое лицо. Попрактикуйтесь с тернарным оператором, выводить вместо числа текст. Например: customerType = 1 -> Физ. лицо
*/
//Код решения

// var customer = Number(prompt("1-физическое лицо , 2-юридическое лицо "));
// if(customer === 1){
//     console.log("1-физическое лицо");
// }
// else if(customer === 2){
//     console.log("2-юридическое лицо");
// }else{
//     console.warn(Error);
// }

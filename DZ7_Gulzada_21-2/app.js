/* Написать функцию которая будет напрямую вызываться у строк и переворачивать их 
(эту функцию вы уже реализовывали в рамках прошлой ДЗ). Нужно лишь чуть-чуть поправить 
код чтобы можно было функцию вызвать не так: reverse("hello") -> "olleh", а так: "hello".reverse() -> "olleh"
*/
//Код решения

 String.prototype.reverso = function (){

return this.split('').reverse().join('')
}

/* Также сделать с функцией capitalizeString (которая делает первую букву заглавной, а все остальные строчными)
*/

String.prototype.toCapital= function (){ return this[0].toUpperCase()+this.slice(1).toLowerCase()}

/* Написать мини-приложение по сохранению заметок. Логика следующая: 
в коде создать объект в котором будут хранится заметки в следующем виде: 
{"Январь": ["", ""], "Февраль": ["", ""]} и т.д; на интерфейсе создать поле ввода и 
вкладки для каждого месяца,  и в зависимости от того какой месяц выбрал пользователь 
отображать соответствующие заметки; также сохранять введенный текст заметки в тот месяц 
который выбрал пользователь; добавление заметок можно сделать как с помощью кнопки, либо 
по нажатию на кнопку enter на клавиатуре; дизайн на ваш вкус, я просто накидал самый базовый 
от которого можно оттолкнуться.
*/
//Код решения

const months = {
  "Январь": [],
  "Февраль": [],
  "Март": [],
  "Апрель": [],
  "Май": [],
  "Июнь": [],
  "Июль": [],
  "Август": [],
  "Сентябрь": [],
  "Октябрь": [],
  "Ноябрь": [],
  "Декабрь": [],

}
const items = document.querySelectorAll('#item1')
var ul = document.querySelector('#dynamic_list');

items.forEach((item,i)=>{
  item.onclick=()=>{
    items.forEach(item=>item.classList.remove('item_active'))
    items[i].classList.add('item_active')
    ul.innerHTML =months[items[i].textContent].map((item,i)=>{
      return `<li>${item}<button class='liDelete' data-id='${i}'>X</button></li>`
    }).join('')
    deleteThis()
  }
})


function addItem(){
  let value = document.querySelector('#inp').value

  if(value!==''){
    items.forEach((item,i)=>{
      if(item.classList.contains('item_active')){
        months[item.textContent].push(value)
        ul.innerHTML=months[items[i].textContent].map((item,i)=>{
          return `<li>${item} <button class='liDelete' data-id='${i}' >X</button> </li>`
        }).join('')
        deleteThis()
      }

    })

  }
  document.querySelector('#inp').value=''
}

function removeItem(){
  items.forEach((item,i)=>{
    if(item.classList.contains('item_active')){
      months[item.textContent].pop()
      ul.innerHTML =months[items[i].textContent].map((item,i)=>{
        return `<li >${item} <button class='liDelete' data-id='${i}' >X</button></li>`
      }).join('')
      deleteThis()
    }
  })
}


function deleteThis(){
  document.querySelectorAll('.liDelete').forEach(item=>{
  
    item.addEventListener('click',(e)=>{
  
      let index =e.target.dataset.id
  
      items.forEach((item,i)=>{
      if(item.classList.contains('item_active')){
        months[item.textContent].splice(index,1)
        ul.innerHTML =months[items[i].textContent].map((item,i)=>{
          return `<li >${item} <button class='liDelete' data-id='${i}' >X</button> </li>`
        }).join('')
        deleteThis()
      }
    })
    })
  })
}

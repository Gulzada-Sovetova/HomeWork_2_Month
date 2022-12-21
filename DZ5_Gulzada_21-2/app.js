
const minutesNode = document.querySelector('.minutes');
const buttonRun = document.getElementById('start');
const buttonStop = document.getElementById('btn');

let i = 0;

buttonRun.addEventListener('click', ()=>{
    if(i<60){
        const increment = setInterval(() => {
            i++
            minutesNode.innerHTML = i
            if(i>=60){
                clearInterval(increment)
            }
        }, 100)
        buttonStop.addEventListener('click', ()=>{
            i = 0
            minutesNode.innerHTML = i
            clearInterval(increment)

        })
    }
})





























const secondsNode = document.querySelector('.seconds');
const buttonRun = document.getElementById('start');
const buttonStop = document.getElementById('stop');
const buttonReset = document.getElementById('btn');

let i = 0


buttonRun.addEventListener('click', (e)=>{
    buttonRun.setAttribute('disabled', true)
    buttonStop.removeAttribute('disabled', true)

        const increment = setInterval(() => {
            i++
            secondsNode.innerHTML = i
        }, 10)

    buttonStop.addEventListener('click', ()=>{
        clearInterval(increment)
        buttonStop.setAttribute('disabled', true)
        buttonRun.removeAttribute('disabled', true)
    })
        buttonReset.addEventListener('click', ()=>{
        buttonStop.removeAttribute('disabled', true)
            i = 0
            secondsNode.innerHTML = i

        })
})
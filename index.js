 const startButton = document.querySelector('#start');
 const screens = document.querySelectorAll('.screen');
 const timeList = document.querySelector('.time-list');
 const board = document.querySelector('#board');
 const timeEl = document.querySelector('#time');
 const colors = ['#00FF00', '#EE82EE', '#FA8072', '#FFFF00', '#ADFF2F', '#DCDCDC', '#F4A460', '#FF4500', '#191970', '#FFF5EE', '#483D8B', '#7FFFD4']

 let time = 0;
 let score = 0;


 startButton.addEventListener('click', (event) =>{
     event.preventDefault()
     screens[0].classList.add('up')
 })

 timeList.addEventListener('click', event => 
 {
    if (event.target.classList.contains
        ('time-btn')){
        time = parseInt(event.target.
        getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
 })

board.addEventListener('click', event  => {
    if (event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

 function startGame(){
     setInterval(decreaseTime, 1000)
     createRandomCircle()
     timeEl.innerHTML = `00:${time}`
 }

 function decreaseTime(){
     if (time === 0){
        finishGame()
     }
     else{
        let current = --time
        if (current < 10){
            current = `0${current}`
        }
        setTime(current)
     }
 }

 function setTime (value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame () {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Счет: <span class="primary">${score}<span><h1>`
}

function createRandomCircle(){
    const circle = document.createElement('div')

    const size = getRandomNumber(10, 60)

    const {width, height} = board.getBoundingClientRect()

    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.background = getRandomColor(circle)
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}



function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
 }


 
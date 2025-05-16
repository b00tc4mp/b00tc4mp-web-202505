var robot = document.getElementById('robot')

var step = 10
var x = 100
var y = 200

robot.style.left = x + 'px'
robot.style.top = y + 'px'

document.addEventListener('keydown', function (event) {
    var key = event.key

    console.log(key)

    if (key === 'ArrowDown') {
        y = y + step
    } else if (key === 'ArrowUp') {
        y = y - step
    } else if (key === 'ArrowLeft') {
        x = x - step
    } else if (key === 'ArrowRight') {
        x = x + step
    }

    robot.style.left = x + 'px'
    robot.style.top = y + 'px'
})

var arrowLeftButton = document.getElementById('arrow-left')

arrowLeftButton.addEventListener('click', function (event) {
    x = x - step

    robot.style.left = x + 'px'
})

var arrowRightButton = document.getElementById('arrow-right')

arrowRightButton.addEventListener('click', function (event) {
    x = x + step

    robot.style.left = x + 'px'
})

var arrowUpButton = document.getElementById('arrow-up')

arrowUpButton.addEventListener('click', function (event) {
    y = y - step

    robot.style.top = y + 'px'
})


var arrowDownButton = document.getElementById('arrow-down')

arrowDownButton.addEventListener('click', function (event) {
    y = y + step

    robot.style.top = y + 'px'
})
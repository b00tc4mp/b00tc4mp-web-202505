var body = document.querySelector('body')

var game = document.createElement('div')
game.style.width = 100 + 'px'
game.style.height = 100 + 'px'
game.style.borderColor = 'black'
game.style.borderStyle = 'solid'
game.style.borderWidth = 1 + 'px'
game.style.position = 'absolute'

var water = document.createElement('div')
water.style.width = 10 + 'px'
water.style.height = 10 + 'px'
water.style.backgroundColor = 'dodgerblue'
water.style.position = 'absolute'
water.style.left = 30 + 'px'
water.style.top = 30 + 'px'

game.appendChild(water)

body.appendChild(game)

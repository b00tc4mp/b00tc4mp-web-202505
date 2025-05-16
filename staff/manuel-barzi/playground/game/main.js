var body = document.querySelector('body')

var game = document.createElement('div')
game.style.width = 100 + 'px'
game.style.height = 100 + 'px'
game.style.borderColor = 'black'
game.style.borderStyle = 'solid'
game.style.borderWidth = 1 + 'px'
game.style.position = 'absolute'

var grass = document.createElement('div')
grass.style.width = 10 + 'px'
grass.style.height = 10 + 'px'
grass.style.backgroundColor = 'darkgreen'
grass.style.position = 'absolute'
grass.style.left = 20 + 'px'
grass.style.top = 20 + 'px'

game.appendChild(grass)

var water = document.createElement('div')
water.style.width = 10 + 'px'
water.style.height = 10 + 'px'
water.style.backgroundColor = 'dodgerblue'
water.style.position = 'absolute'
water.style.left = 30 + 'px'
water.style.top = 30 + 'px'

game.appendChild(water)

var water1 = document.createElement('div')
water1.style.width = 10 + 'px'
water1.style.height = 10 + 'px'
water1.style.backgroundColor = 'dodgerblue'
water1.style.position = 'absolute'
water1.style.left = 40 + 'px'
water1.style.top = 40 + 'px'

game.appendChild(water1)

body.appendChild(game)

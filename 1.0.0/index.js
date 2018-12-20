var shower = document.getElementsByClassName('shower')[0]

let sizeMin = 20
let sizeMax = 50

let count = 0

function getRandom(min, max) {
  return (Math.random() * (max - min)) + min
}

let vw = window.innerWidth
let vh = window.innerHeight

function drip() {
  var drop = document.createElement('DIV')
  var size = getRandom(sizeMin, sizeMin)
  drop.style.width = size + 'px'
  drop.style.height = size + 'px'
  drop.style.left = getRandom(0, vw) + 'px'
  drop.style.top = getRandom(0, vh) + 'px'
  drop.classList.add('drop')
  shower.appendChild(drop)

  setTimeout(function() {
    drop.classList.add('dripped')
  })

  console.log('Drip.')

  sizeMin += 10
  sizeMax += 10
  count += 1

  if (count < 60) {
    setTimeout(drip, getRandom(800, 4000))
  }
}

setTimeout(drip, getRandom(800, 4000))

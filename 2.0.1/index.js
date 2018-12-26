function getRandomColor() {
  function n() {
    return Math.floor(Math.random() * 256)
  }

  return [ n(), n(), n() ]
}

function getRelative(rgb) {
  return rgb.map(function(n) {
    var difference = Math.floor((Math.random() * 200) - 100)
    return Math.max(0, Math.min(255, n + difference))
  })
}

function makeColor(rgb) {
  return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')'
}

function setColor(tab, rgb) {
  tab.dataset.r = rgb[0]
  tab.dataset.g = rgb[1]
  tab.dataset.b = rgb[2]
}

function getColor(tab) {
  var r = parseInt(tab.dataset.r, 10)
  var g = parseInt(tab.dataset.g, 10)
  var b = parseInt(tab.dataset.b, 10)
  return [r, g, b]
}

function makeTab(size = 1, rgb = root) {
  var tab = document.createElement('div')
  var add = document.createElement('div')
  var color = makeColor(rgb)

  tab.classList.add('tab')
  tab.dataset.size = size
  tab.style.background = color
  tab.style.flexDirection = Math.random() > 0.5 ? 'row' : 'column'

  setColor(tab, rgb)

  add.classList.add('add')
  add.textContent = '+'
  add.style.fontSize = size * 100 + '%'

  tab.appendChild(add)
  return tab
}

function addTriggers(tabs = []) {
  tabs.forEach(function(tab) {
    var size = parseFloat(tab.dataset.size, 10)
    var childTabs = [].slice.call(tab.children).filter(function(child) { child.classList.contains('tab') })
    var add = tab.getElementsByClassName('add')[0]
    var rgb = getColor(tab)

    add.addEventListener('click', function(e) {
      tab.removeChild(add)

      var firstTab = makeTab(size / 2, rgb)
      var secondTab = makeTab(size / 2, getRelative(root))
      tab.appendChild(firstTab)
      tab.appendChild(secondTab)
      addTriggers([ firstTab, secondTab ])
    })
  })
}

var root = getRandomColor()
var tabs = Array.prototype.slice.call(document.getElementsByClassName('tab'))
tabs[0].style.background = makeColor(root)
tabs[0].style.flexDirection = Math.random() > 0.5 ? 'row' : 'column'
addTriggers(tabs)
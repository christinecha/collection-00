var tabs = Array.prototype.slice.call(document.getElementsByClassName('tab'))
var bottom = document.getElementsByClassName('bottom')[0]
var shrinky = document.getElementsByClassName('shrinky')[0]
var x = document.getElementsByClassName('x')[0]

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

function deactivate(tab) {
  if (!tab) return
  tab.style.removeProperty('z-index')
  tab.style.removeProperty('pointer-events')
  activeTab = null
}

function activate(tab) {
  var color = tab.dataset.color
  bottom.classList.remove('collapse')
  bottom.style.height = 'calc(100% - ' + bottomY + 'px)'
  shrinky.style.background = color
  tab.style.zIndex = 1
  tab.style.pointerEvents = 'none'
  activeTab = tab
}

var activeTab = tabs[0]
var root = getRandomColor()
var bottomY = window.innerHeight / 2

tabs.forEach(function(tab, i) {
  var relative = getRelative(root)
  var color = makeColor(relative)
  tab.dataset.color = color
  tab.style.background = color

  if (i === 0) {
    activate(tab)
  }

  tab.addEventListener('click', function(e) {
    bottomY = Math.min(window.innerHeight - 200, Math.max(100, e.clientY))
    deactivate(activeTab)
    activate(tab)
  })
})

x.addEventListener('click', function() {
  bottom.classList.add('collapse')
  deactivate(activeTab)
})
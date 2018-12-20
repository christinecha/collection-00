var section1 = document.getElementById('1')
var section2 = document.getElementById('2')

var button1 = document.getElementsByTagName('BUTTON')[0]
var button2 = document.getElementsByTagName('BUTTON')[1]

button1.addEventListener('click', function() {
  section1.classList.add('discovered')
})

button2.addEventListener('click', function() {
  section2.classList.add('discovered')
})
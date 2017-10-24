var requestHelper = require('./helpers/requestHelper.js')

window.addEventListener('DOMContentLoaded', function () {
  requestHelper.getRequest('http://localhost:3000/api/cards', function (cards) {
    var mainDiv = document.getElementById('main')
    var list = document.createElement('ul')

    cards.forEach(function (card) {
      var listItem = document.createElement('li')
      listItem.innerText = card.name
      list.appendChild(listItem)
    })
    mainDiv.appendChild(list)
  })
})

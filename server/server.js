var express = require('express')
var app = express()
app.use(express.static(__dirname + '/../client/build'))
var cardsRouter = require('./controllers/cards_controller.js')
app.use('/api/cards', cardsRouter)
app.listen(3000, function () {
  console.log('app is running!')
})

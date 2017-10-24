var cardsQueryHelper = require('../db/cardsQueryHelper.js')
var express = require('express')
var cardsRouter = express.Router()

cardsRouter.get('/', function (req, res) {
  cardsQueryHelper.all(function (cards) {
    res.json(cards)
  })
})

module.exports = cardsRouter

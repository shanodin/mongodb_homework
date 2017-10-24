var MongoClient = require('mongodb').MongoClient

var cardsQueryHelper = {
  url: 'mongodb://localhost:27017/card_list',
  all: function (onQueryFinished) {
    MongoClient.connect(this.url, function (err, db) {
      var cardsCollection = db.collection('cards')

      cardsCollection.find().toArray(function (err, docs) {
        onQueryFinished(docs)
      })
    })
  }
}

module.exports = cardsQueryHelper

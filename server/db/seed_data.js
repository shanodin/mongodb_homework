use card_list;

db.dropDatabase()

db.cards.insert([
  {
    name: "Account Siphon",
    faction: "Criminal",
    type: "event"
  },
  {
    name: "Hostile Takeover",
    faction: "Weyland",
    type: "agenda"
  }
])
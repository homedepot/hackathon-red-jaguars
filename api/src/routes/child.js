const router = require('express').Router()
const mongoose = require('mongoose')

const Schema = mongoose.Schema
var ChildWish = mongoose.Schema({
  firstName: String,
  lastName: String,
  age: String,
  homeTown: String,
  illness: String,
  wishType: String,
  wishDetail: String,
  To: String
})

var Child = mongoose.model('Child', ChildWish, 'childWish')

router.post('/addChild', function(req, res, next) {
  console.log('adding child')
  const { age, firstName, lastName, homeTown, wishType, wishDetail, to } = req.body
  var child1 = new Child({
    firstName: firstName,
    lastName: lastName,
    age: age,
    homeTown: homeTown,
    WishType: wishType,
    WishDetail: wishDetail,
    To: to
  })

  child1.save(function(err, child) {
    if (err) return console.error(err)
    console.log(child.name + ' saved to ChildWish collection.')
    res.sendStatus(200)
  })
})

router.get('/childs', function(req, res, next) {
  console.log('fetching childs')
  var temp = []
  Child.find(function(err, child) {
    if (err) return console.error(err)
    console.log(child)
    res.send(child)
  })
})

module.exports = router

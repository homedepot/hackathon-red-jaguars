const router = require('express').Router()
const mongoose = require('mongoose')

const Schema = mongoose.Schema
let ChildWish = mongoose.Schema({
  firstName: String,
  age: String,
  homeTown: String,
  wishType: String,
  illness: String,
  wishDetail: String,
  orgId: String,
  userId: String,
  audio: String,
  video: String,
  photo: String
})

let Wish = mongoose.model('Wish', ChildWish, 'wish')

router.post('/create', function(req, res, next) {
  console.log('creating wish')
  const { age, firstName, homeTown, wishType, illness, wishDetail, orgId, userId, audio, photo, video } = req.body
  let newWish = new Wish({
    firstName: firstName,
    age: age,
    homeTown: homeTown,
    wishType: wishType,
    illness: illness,
    wishDetail: wishDetail,
    orgId: orgId,
    userId: userId,
    audio: audio,
    video: video,
    photo: photo
  })
  newWish.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error occurred while creating the wish."
  });
  });
})

router.get('/findAll', function(req, res, next) {
  console.log('fetching wishes')
  Wish.find()
    .then(wishes => {
      res.send(wishes);
    }).catch( err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes"
      });
  });
})


router.get('/findbyid/:id', function(req, res) {
  console.log('finding one by ID');
  Wish.findById(req.params.id)
    .then(wish => {
      if(!wish) { return res.status(404).end();}
      return res.status(200)
    }).catch(err => {
    console.log(err)
  });
});

router.delete('/delete/:id', function(req, res) {
  let id = req.params.id;
  Wish.findOneAndRemove({_id: id}, function(err) {
    if(err) {
      console.log(err)
      return res.status(500).send();
    }
    return res.status(200).send();
  })
})

router.put('/update/', function(req, res) {
  console.log('Updating a wish');
  console.log(req.body)
  if (!req.body) {
    return res.status(400).send({
      message: "Wish content can not be empty"
    });
  }

  Wish.findOneAndUpdate(req.body._id, {
    firstName: req.body.firstName,
    age: req.body.age,
    homeTown: req.body.homeTown,
    wishType: req.body.wishType,
    illness: req.body.illness,
    wishDetail: req.body.wishDetail,
    orgId: req.body.orgId,
    userId: req.body.userId,
    audio: req.body.audio,
    video: req.body.video,
    photo: req.body.photo


  }, {new: true})
    .then(wish => {
      if (!wish) {
        return res.status(400).send({
          message: "Wish not found with id " + req.body._id
        });
      }
      res.send(wish);
    }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Wish not found with id " + req.body._id
      });
    }
    return res.status(500).send({
      message: "Error Updating wish with id " + req.body._id
    });
  });
})


module.exports = router

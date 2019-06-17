const router = require('express').Router()
const mongoose = require('mongoose')
var multer = require('multer');
var fs = require('fs');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

const Schema = mongoose.Schema
let ChildWish = mongoose.Schema({
  firstName: String,
  age: String,
  homeTown: String,
  wishType: String,
  gender: String,
  wishDate: String,
  illness: String,
  wishDetail: String,
  orgId: String,
  userId: String,
  audio: Object,
  video: Object,
  photoURL: String,
  photo: Object,
  sponsorLogo: Object,
  sponsorLogoURL: String,
  sponsorPhoto1URL: String,
  sponsorPhoto2URL: String,
  sponsorPhoto1: Object,
  sponsorPhoto2: Object,
  sponsorVideo: Object,
})

let Wish = mongoose.model('Wish', ChildWish, 'wish')


router.post('/create', upload.single('photo'),function(req, res, next) {
  console.log('creating wish')
  
  let fileName= "uploads/" + new Date().getTime() + (req.file && req.file.originalname);
  if(req.file)
  {
    fs.writeFile(fileName, req.file.buffer, function (err) {
      if (err) {
        console.log("in err")
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  }
  const { age, firstName, homeTown, wishType, gender, wishDate, illness, wishDetail, orgId, userId, audio, photo, video } = req.body
  let newWish = new Wish({
    firstName: firstName,
    age: age,
    homeTown: homeTown,
    wishType: wishType,
    gender: gender,
    wishDate: wishDate,
    illness: illness,
    wishDetail: wishDetail,
    orgId: orgId,
    userId: userId,
    audio: audio,
    video: video,
    photoURL: req.file ? fileName : ""
  })
  console.log(newWish)
  newWish.save()
    .then(data => {
      console.log('creating')
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Error occurred while creating the wish."
  });
  });
})

// router.post('/createxxx',function(req, res, next) {
//   console.log('creating wish')
//   const { age, firstName, homeTown, wishType, gender, wishDate, illness, wishDetail, orgId, userId, audio, photo, video } = req.body
//   let newWish = new Wish({
//     firstName: firstName,
//     age: age,
//     homeTown: homeTown,
//     wishType: wishType,
//     gender: gender,
//     wishDate: wishDate,
//     illness: illness,
//     wishDetail: wishDetail,
//     orgId: orgId,
//     userId: userId,
//     audio: audio,
//     video: video,
//     photo: photo
//   })
//   newWish.save()
//     .then(data => {
//       console.log('creating')
//       res.send(data);
//     }).catch(err => {
//       res.status(500).send({
//         message: err.message || "Error occurred while creating the wish."
//   });
//   });
// })

router.get('/findAll', function(req, res, next) {
  console.log('fetching wishes')
  Wish.find()
    .then(wishes => {
      console.log("fetched")
      res.send(wishes);
    }).catch( err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes"
      });
  });
})


router.get('/findOneById/:id', function(req, res) {
  console.log('finding one by ID', req.params.id)
  let id = req.params.id;
  Wish.findOne({_id: id })
    .then(wish => {
      if(!wish) {
        return res.status(404).send({
          message: "wish not found with id " + req.params.id
        });
      }
      res.send(wish);
    }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
        message: "wish not found with id " + req.params.id
      });
    }
    return res.status(500).send({
      message: "Error retrieving wish with id " + req.params.id
    });
  });
});

router.delete('/delete/:id', function(req, res) {
  console.log('Deleting a wish by Id');
  let id = req.params.id;
  Wish.findOneAndRemove({_id: id})
    .then(wish => {
      if(!wish) {
        return res.status(404).send({
          message: "wish not found with id " + req.params.id
        });
      }
      res.send({message: "Wish successfully deleted"})
    }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: "Note not found with id " + req.params._ic
      });
    }
    return res.status(500).send({
      message: "Error deleting wish with id " + req.params._id
    });
  })
})


router.put('/update/:id',upload.single('sponsorLogo'), function(req, res) {
  console.log('Updating a wish');
  let id = req.params.id;
  if (!req.body) {
    return res.status(400).send({
      message: "Wish content can not be empty"
    });
  }

  let fileName= "uploads/" + new Date().getTime() + (req.file && req.file.originalname);
  if(req.file)
  {
    fs.writeFile(fileName, req.file.buffer, function (err) {
      if (err) {
        console.log("in err")
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  }
  
  Wish.findOneAndUpdate({_id: id }, { $set:{
    orgId: req.body.orgId,
    audio: req.body.audio,
    video: req.body.video,
    sponsorLogoURL:req.file ? fileName : ""
  }}, {new: true})
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

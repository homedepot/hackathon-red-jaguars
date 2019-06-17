const router = require('express').Router()
const mongoose = require('mongoose')
const multer = require('multer');


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    console.log('hhhee-->>' ,file);
    cb(null, "wish"+ file.originalName);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimeType === 'image/jpeg' || file.mimeType === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }

};

const upload = multer({storage: storage, limits: {
  storage: storage,
    limits: {
    fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
  }});


const Schema = mongoose.Schema;

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
  photo: {type: String, required: false },
  companyLogo: Object
});

let Wish = mongoose.model('Wish', ChildWish, 'wish')

router.post('/create', upload.single('photo'), function(req, res, next) {

  debugger;
  console.log('creating wish');
  console.log('sandy -- >>', req.body.photo)
  // const { age, firstName, homeTown, wishType, gender, wishDate, illness, wishDetail, orgId, userId, audio, photo, video } = req.body
  let newWish = new Wish({
    firstName: req.body.firstName,
    age: req.body.age,
    homeTown: req.body.homeTown,
    wishType: req.body.wishType,
    gender: req.body.gender,
    wishDate: req.body.wishDate,
    illness: req.body.illness,
    wishDetail: req.body.wishDetail,
    orgId: req.body.orgId,
    userId: req.body.userId,
    audio: req.body.audio,
    video: req.body.video,
    photo: req.file.path
  });

  // let form_data = new FormData();
  //
  // for (let key in newWish) {
  //   form_data.append(key, newWish[key]);
  // }
  //
  // $.ajax({
  //
  // })

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


router.put('/update/:id', function(req, res) {
  console.log('Updating a wish');
  console.log(req.body)
  let id = req.params.id;
  if (!req.body) {
    return res.status(400).send({
      message: "Wish content can not be empty"
    });
  }

  Wish.findOneAndUpdate({_id: id }, { $set:{
    firstName: req.body.firstName,
    age: req.body.age,
    homeTown: req.body.homeTown,
    wishType: req.body.wishType,
    wishDate: req.body.wishDate,
    gender: req.body.gender,
    illness: req.body.illness,
    wishDetail: req.body.wishDetail,
    orgId: req.body.orgId,
    userId: req.body.userId,
    audio: req.body.audio,
    video: req.body.video,
    photo: req.body.photo

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

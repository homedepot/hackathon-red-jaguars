const router = require('express').Router()
const mongoose = require('mongoose')
var multer = require('multer');
var fs = require('fs');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

router.post('/picUpload', upload.single('photo'),function(req, res, next) {
  console.log('creating volonteer')
  
  let fileName= "uploads/" + req.body.fileName + ".png";
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
  res.send(200)
})


module.exports = router

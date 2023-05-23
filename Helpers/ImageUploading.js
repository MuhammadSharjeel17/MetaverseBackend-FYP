const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router(); // import uuidv4

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.FILE_UPLOAD_PATH)
  },
  filename: function (req, file, cb) {
    const uniqueId = uuidv4(); // generate a unique identifier
    const originalName = file.originalname.split('.').slice(0, -1).join('.'); // remove file extension
    const extension = file.originalname.split('.').pop(); // get file extension
    const fileName = `${originalName}-${uniqueId}.${extension}`; // add unique identifier to file name
    cb(null, fileName);
  }
});

const upload = multer({ storage: storage });

exports.uploadImage = upload.single('image');
module.exports = router;
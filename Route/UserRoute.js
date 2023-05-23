const router = require('express').Router();
const multer = require('multer');
const { registerUser, loginUser, updateUserProfile, getUserDetails } = require('../Controller/UserController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './ImageUploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

router.post('/setsignin', registerUser);
router.post('/setlogin', loginUser);
router.put('/updateuser/:id', upload.single('image'), updateUserProfile);
router.get('/getuser/:id',getUserDetails);
module.exports = router;

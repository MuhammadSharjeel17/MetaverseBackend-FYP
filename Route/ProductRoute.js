const router=require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './ImageUploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });
  
  const upload = multer({ storage: storage });

const {createProduct, getAllProducts, updateProducts, getSingleProduct, deleteProduct, createImageProduct, getImageProduct, updateImageProducts, deleteImageProduct, getSingleImageProduct} = require('../Controller/ProductController');
//Routes for Product

router.post('/createproduct',createProduct);
router.post('/createimageproduct',upload.single('image'),createImageProduct);
router.get('/getproducts',getAllProducts);
router.get('/getimageproduct',getImageProduct);
router.put('/updateproduct/:id',updateProducts);
router.put('/updateimageproduct/:id',updateImageProducts);
router.get('/getsingleproduct/:id',getSingleProduct);
router.get('/getsingleimageproduct/:id',getSingleImageProduct);
router.delete('/deleteproduct/:id',deleteProduct);
router.delete('/deleteimageproduct/:id',deleteImageProduct);
module.exports = router;

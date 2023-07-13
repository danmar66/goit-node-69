const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dirPath = path.resolve(__dirname, '../tmp')
    console.log('dirpath = ', dirPath)
    cb(null, dirPath)
  },
  filename: function (req, file, cb) {
    cb(null, Math.random() + file.originalname)
  },
})

const upload = multer({
  storage,
})

module.exports = upload

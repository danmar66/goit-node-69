const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const fs = require('fs/promises')

const app = express()

app.use(cors())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  },
})

const upload = multer({
  storage: storage,
})

app.post('/upload', upload.single('image'), async (req, res, next) => {
  console.log('file', req.file)
  const { filename } = req.file
  try {
    const tmpPath = path.resolve(__dirname, 'tmp', filename)
    const newPath = path.resolve(__dirname, 'public', filename)
    await fs.rename(tmpPath, newPath)
    return res.json({ ok: true })
  } catch (error) {
    console.error('Error while moving file to ./public', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
})

app.listen(3000, () => console.log('Server started'))

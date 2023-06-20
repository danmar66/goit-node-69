const books = require('../../data/books')
const express = require('express')

const router = express.Router()

router.get('', (req, res) => {
  res.json(books)
})

router.get('/:id', (req, res) => {})

router.post('', (req, res) => {})

router.put('', (req, res) => {})

router.delete('/:id', (req, res) => {})

module.exports = router

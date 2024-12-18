const express = require('express');
const router = express.Router();
const posts = require('../data/posts')

//index
router.get('/', (req, res) => {
  res.json(posts)
})

//show
router.get('/:id', (req, res) => {
  const post = posts[req.params.id]
  console.log(post);
  res.json(post)
})

//store
router.post('/', (req, res) => {
  res.send('Nuovo post')
})

//update
router.put('/:id', (req, res) => {
  res.send(`Modifico il post con id ${req.params.id} `)
})

//modify
router.patch('/:id', (req, res) => {
  res.send(`Modifico parzialmente il post con id ${req.params.id}`)
})

//destroy
router.delete('/:id', (req, res) => {
  res.send(`Cancellazione del post con id ${req.params.id}`)
})

module.exports = router
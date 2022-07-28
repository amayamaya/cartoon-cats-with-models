const { Router } = require('express');
// const { cats } = require('../../data/cats');
const Cat = require('../models/Cat');
const router = Router();

router
  .get('/:id', async (req, res) => {
    const cat = await Cat.getById(req.params.id);
    res.json(cat);
  })
  .get('/', async (req, res) => {
    const ids = await Cat.getAll();
    // console.log('id param');
    res.json(ids);
  });

module.exports = router;

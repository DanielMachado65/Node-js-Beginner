'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/product-controller')

router.get('/',(req, res, next) => {
  res.status(200).send({
    title: "Node Store Api",
    version: "0.0.2"
  });
});

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;

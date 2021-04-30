const express = require('express');
const mongoose = require('mongoose');
const exampleRouter = express.Router();

const Example = require('../models/example');

exampleRouter.get('/', (req, res, next) => {
  Example.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

exampleRouter.post('/', (req, res, next) => {
  const exampleEntry = new Example({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });

  exampleEntry
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'Handling POST requests to /example',
        createdEntry: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

exampleRouter.get('/:exampleId', (req, res, next) => {
  const id = req.params.exampleId;
  Example.findById(id)
    .exec()
    .then((doc) => {
      console.log('From dtabase', doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: 'No valid entry foudn for provided ID' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

exampleRouter.patch('/:exampleId', (req, res, next) => {
  const id = req.params.exampleId;
  const updateOps = {};
  // Dynamically update fields;
  // e.g., expects [{ "propName": "price", "value": 60 }]
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Example.update({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

exampleRouter.delete('/:exampleId', (req, res, next) => {
  const id = req.params.exampleId;
  Example.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = exampleRouter;

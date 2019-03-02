const express = require('express');
const _ = require('lodash');
const Event = require('../models/Event');

const router = express.Router();

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, auth');
  next();
});

router.get('/', (req, res, next) => {
  Event.find({}).then((events) => {
    res.json(events);
  })
});

router.post('/', (req, res, next) => {
  const event = req.body;
  // TODO: Add body parameter validation
  if (_.isEmpty(event)) {
    return res.status(400).json({ error: 'Empty body' })
  }
  Event.findOne({ title: event.title })
    .then((eventQueryResult) => {
      if (eventQueryResult) {
        return res.status(400).json({
          error: 'event already exists',
        });
      }
      const newEvent = new Event({
        created: new Date(),
        title: event.title,
        start: event.start,
        end: event.end,
        details: event.details,
        url: event.url
      });
      newEvent.save().then(retEvent => res.json(retEvent));
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
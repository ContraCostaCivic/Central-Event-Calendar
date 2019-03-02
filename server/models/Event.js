const mongoose = require('mongoose')
// const moment = require('moment')

const { Schema } = mongoose

const EventSchema = new Schema({
  created: {
    type: Date,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  details: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  }
});

const Event = mongoose.model('events', EventSchema);

module.exports = Event;
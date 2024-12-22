const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  part: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
  },
  subtitle: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  version: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
  },
  progress: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  headline: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  link: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  groupProject: {
    type: Boolean,
    required: true,
  },
  teamMembers: {
    type: [String],
    required: false,
  },
  tags: {
    type: [String],
    required: false,
  },
});

module.exports = mongoose.model('Project', ProjectSchema);

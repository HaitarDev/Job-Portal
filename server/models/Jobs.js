const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "this field is required"],
  },
  jobTitle: {
    type: String,
    required: [true, "this field is required"],
  },
  companyLogo: {
    type: String,
    required: [true, "this field is required"],
  },
  minPrice: {
    type: Number,
    required: [true, "this field is required"],
  },
  maxPrice: {
    type: Number,
    required: [true, "this field is required"],
  },

  salaryType: {
    type: String,
    enum: ["yearly", "monthly", "hourly"],
    required: [true, "this field is required"],
  },
  jobLocation: {
    type: String,
    required: [true, "this field is required"],
  },
  postingDate: {
    type: Date,
    required: [true, "this field is required"],
    default: Date.now(),
  },
  experienceLevel: {
    type: String,
    enum: ["Any experience", "Internship", "Work remotely"],
    required: [true, "this field is required"],
  },
  employmentType: {
    type: String,
    enum: ["Full-time", "Temporary", "Part-time"],
    required: [true, "this field is required"],
  },
  description: { type: String, required: [true, "this field is required"] },
});

const Jobs = mongoose.model("Jobs", jobsSchema);

module.exports = Jobs;

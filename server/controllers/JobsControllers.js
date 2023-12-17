const Jobs = require("../models/Jobs");
const cookieParser = require("cookie-parser");

// create -----
exports.CreateJob = async (req, res) => {
  try {
    // const {companyName,jobTitle , companyLogo, minPrice, maxPrice} = req.body
    const job = await Jobs.create(req.body);

    console.log(job);
    const jobs = await Jobs.find();

    res.status(200).json({ status: "success", data: jobs });
  } catch (err) {
    res.status(400).json({ status: "error", message: err });
  }
};

// read -----
exports.readJobs = async (req, res) => {
  try {
    const jobs = await Jobs.find();
    if (!jobs) return res.status(404).send("Jobs not founds");

    res.status(200).json({ status: "success", data: jobs });
  } catch (err) {
    res.status(400).json({ status: "error", message: err });
  }
};

// delete ----
exports.deleteJobs = async (req, res) => {
  try {
    const job = await Jobs.findByIdAndDelete(req.params.id, { new: true });

    if (!job) return res.status(404).send("Job not founds");

    res
      .status(200)
      .json({ status: "success", message: "Job deleted succesful" });
  } catch (err) {
    res.status(400).json({ status: "error", message: err });
  }
};

// update -----
exports.updateJobs = async (req, res) => {
  try {
    const job = await Jobs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!job) return res.status(404).send("Job not founds");

    res.status(200).json({ status: "success", data: job });
  } catch (err) {
    res.status(400).json({ status: "error", message: err });
  }
};

// get stats with aggregate .......

exports.jobStats = async (req, res) => {
  try {
    const stats = await Jobs.aggregate([
      {
        $group: {
          _id: "$jobTitle",
          numJobs: { $sum: 1 },
          minAvgPrice: {
            $avg: "$minPrice",
          },
        },
      },
    ]);

    res.status(200).json({ status: "success", data: stats });
  } catch (err) {
    res.status(400).json({ status: "error", message: err });
  }
};

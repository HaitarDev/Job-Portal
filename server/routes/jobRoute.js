const express = require("express");
const jobsControllers = require("../controllers/JobsControllers");
const authControllers = require("../controllers/AuthControllers");

const app = express();

const router = express.Router();

router.route("/").get(authControllers.protect, jobsControllers.readJobs);

router
  .route("/post-job")
  .post(authControllers.protect, jobsControllers.CreateJob);

router
  .route("/:id")
  .delete(authControllers.protect, jobsControllers.deleteJobs)
  .patch(authControllers.protect, jobsControllers.updateJobs);

router
  .route("/job-stats")
  .get(authControllers.protect, jobsControllers.jobStats);

module.exports = router;

const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts);

// /api/users/:userId
router.route("/:thoughtId").get(getSingleThought);

module.exports = router;

const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/users/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtID/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/applications/:applicationId/tags/:tagId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;

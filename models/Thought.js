const { Schema, model } = require("mongoose");

//Schema for what makes up a reaction

const reactionSchema = new Schema({
  reactionId: {
    type: ObjectId,
    default: ObjectId,
  },
  reactonBody: {
    type: String,
    required: true,
    maxlength: 280,
    username: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
      //TODO getfn
    },
  },
});

// Schema for what makes up a Thought
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date, default: Date.now }, // TODO date fn
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// virtual reaction count

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize the Comment model
const Thoughts = model("Thoughts", thoughtSchema);

module.exports = Thoughts;

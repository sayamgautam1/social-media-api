const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

//Schema for what makes up a reaction

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtTime,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Schema for what makes up a Thought
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date, default: Date.now, get: createdAtTime },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get methode to return created at time

function createdAtTime() {
  return moment().format("MMMM Do YYYY, h:mm:ss a");
}

// virtual reaction count

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize the Comment model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;

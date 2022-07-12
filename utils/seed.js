const connection = require("../config/connection");
const { User, Thought } = require("../models");
const {
  getRandomName,
  getRandomEmail,
  getRandomThought,
  getRandomResponse,
} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = [];
  const thoughts = [];

  for (let i = 0; i < 2; i++) {
    thoughts.push({
      thoughtText: getRandomThought(),
      username: getRandomName(),
      reactions: {
        reactionBody: getRandomResponse(),
        name: getRandomName(),
      },
    });
  }
  await Thought.collection.insertMany(thoughts);

  for (let i = 0; i < 2; i++) {
    const username = getRandomName();

    const email = getRandomEmail();

    users.push({
      username,
      email,
      thoughts: thoughts[i]._id,
    });
  }

  await User.collection.insertMany(users);

  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});

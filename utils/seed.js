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
  const thought = [];

  for (let i = 0; i < 5; i++) {
    const username = getRandomName();
    const email = getRandomEmail();
    thought.push({
      thoughtText: getRandomThought(),
      username,
      reactons: getRandomResponse(),
    });

    users.push({
      username,
      email,
      thought,
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thought);

  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  console.table(thought);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});

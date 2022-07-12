const names = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Aayan",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
  "Abdul-Aziz",
  "Abdulbasir",
  "Abdulkadir",
  "Abdulkarem",
  "Ze",
  "Zechariah",
  "Zeek",
  "Zeeshan",
  "Zeid",
  "Zein",
  "Zen",
  "Zendel",
  "Zenith",
  "Zennon",
  "Zeph",
  "Zerah",
  "Zhen",
  "Zhi",
  "Zhong",
  "Zhuo",
  "Zi",
  "Zidane",
  "Zijie",
  "Zinedine",
  "Zion",
  "Zishan",
  "Ziya",
  "Ziyaan",
  "Zohaib",
  "Zohair",
  "Zoubaeir",
  "Zubair",
  "Zubayr",
  "Zuriel",
  ``,
];

const thoughtBodies = [
  "How to disagree with someone",
  "iPhone review",
  "how-to video",
  "video essay on the history of video games",
  "How to make money on the App Store",
  "Learn NextJS in five minutes (Not clickbate)",
  "Movie trailer",
  "Hello world",
  "Another possible solution to the algorithm",
  "Apology video",
  "Submission for startup pitch",
];

const possibleResponses = [
  "I disagree!",
  "I tried your algorithm, here were the results",
  "This was awesome",
  "Thank you for the great content",
  "Please check out my video response",
  "Like and subscribe to my channel please",
  "Reply: The side effects of in app purchases on digital marketplaces",
];

const emailDomains = [
  "@gmail.com",
  "@mail.com",
  "@aol.com",
  "@email.com",
  "@abc.com",
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random user name
const getRandomName = () => `${getRandomArrItem(names)}`;

// Gets a random email
const getRandomEmail = () =>
  `${getRandomArrItem(names)}${getRandomArrItem(emailDomains)}`;

// get random response
const getRandomResponse = () => `${getRandomArrItem(possibleResponses)}`;

// get random thoughts

const getRandomThought = () => `${getRandomArrItem(thoughtBodies)}`;

module.exports = {
  getRandomName,
  getRandomEmail,
  getRandomResponse,
  getRandomThought,
};

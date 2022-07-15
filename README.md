<h1>Social Media API</h1>
  
 ![badge](https://img.shields.io/badge/license-MIT-yellow)<br />
 ## Description
 🔍 an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

# User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

# Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

```

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation

- Make sure you have MongoDB installed on your machine (if you don't, follow the instructions on the MongoDB Website)
- Clone the repo

```
https://github.com/sayamgautam1/social-media-api.git
```

- Install dependencies with `npm -i`
- Run npm start to run the server and make the API live
- Use your browser or an app like Insomnia to test the REST API.

## Usage

# User

- Get all users: GET ` /api/users`
- Create a user: POST ` /api/users`
- Get user by ID: GET `/api/users/:id`
- Update a user: PUT `/api/users/:id`
- Delete a user: DELETE `/api/users/:id`
- Add a friend: PUT `/api/users/:userId/friends/:friendId`
- Delete a friend: DELETE `/api/users/:userId/friends/:friendId`

# Thought

- Get all thoughts: `GET /api/thoughts`
- Create a thought: `POST /api/thoughts`
- Get thought by ID: `GET /api/thoughts/:id`
- Update a thought: `PUT /api/thoughts/:id`
- Delete a thought: `DELETE /api/thoughts/:id`

# Reaction

- Add a reaction: PUT `/api/thoughts/:id/reactions`
- Delete a reaction: DELETE `/api/thoughts/:id/reactions`

## License

![badge](https://img.shields.io/badge/license-MIT-yellow)
<br />
This application is covered by the MIT license.

## Questions

contact me<br />
<br />
Find me on GitHub: [sayamgautam1](https://github.com/sayamgautam1)<br />
<br />
✉️ Email me with any questions: sayamgautam1@gmail.com<br /><br />

// require("dotenv").config();

// const express = require("express");
// const app = express();
// // const port = 4000;


// app.get("/", (req, res) => {
//   res.send("Hello World Manoj Bale And Family!");
// });

// app.get("/twitter", (req, res) => {
//   res.send("manojdotcom");
// });

// app.get("/login",(req,res) => {
//      res.send("Hey this is Manoj Bale");
// })

// app.get("/youtube", (req, res) => {
//   res.send("<h2>Hello this is the youtube</h2>");
// });

// app.listen(process.env.PORT, () => {
//     console.log(`hii hssh ${port}`);
    
// });

const express = require("express");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send([
    { userName: "manoj", age: 25 },
    { userName: "Bharath", age: 24 },
  ]);
});

const githubData = {
  login: "hiteshchoudhary",
  id: 11613311,
  node_id: "MDQ6VXNlcjExNjEzMzEx",
  avatar_url: "https://avatars.githubusercontent.com/u/11613311?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/hiteshchoudhary",
  html_url: "https://github.com/hiteshchoudhary",
  followers_url: "https://api.github.com/users/hiteshchoudhary/followers",
  following_url:
    "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  gists_url: "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/hiteshchoudhary/subscriptions",
  organizations_url: "https://api.github.com/users/hiteshchoudhary/orgs",
  repos_url: "https://api.github.com/users/hiteshchoudhary/repos",
  events_url: "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/hiteshchoudhary/received_events",
  type: "User",
  site_admin: false,
  name: "Hitesh Choudhary",
  company: null,
  blog: "https://www.youtube.com/c/HiteshChoudharydotcom",
  location: "India",
  email: null,
  hireable: null,
  bio: "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  twitter_username: "hiteshdotcom",
  public_repos: 71,
  public_gists: 1,
  followers: 7037,
  following: 0,
  created_at: "2015-03-23T13:03:25Z",
  updated_at: "2023-09-09T03:27:44Z",
};

app.get("/welcome", (req, res) => {
  res.send("hi,Welcome t0 Express app");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.get("/app/data", (req, res) => {
  res.json([
    { userName: "chandan", age: 30 },
    { userName: "Ajit", age: 24 },
  ]);
});

app.listen(PORT, () => {
  console.log("srever is listening on", PORT);
});



// const githubData = {
//   login: "hiteshchoudhary",
//   id: 11613311,
//   node_id: "MDQ6VXNlcjExNjEzMzEx",
//   avatar_url: "https://avatars.githubusercontent.com/u/11613311?v=4",
//   gravatar_id: "",
//   url: "https://api.github.com/users/hiteshchoudhary",
//   html_url: "https://github.com/hiteshchoudhary",
//   followers_url: "https://api.github.com/users/hiteshchoudhary/followers",
//   following_url:
//     "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
//   gists_url: "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
//   starred_url:
//     "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
//   subscriptions_url:
//     "https://api.github.com/users/hiteshchoudhary/subscriptions",
//   organizations_url: "https://api.github.com/users/hiteshchoudhary/orgs",
//   repos_url: "https://api.github.com/users/hiteshchoudhary/repos",
//   events_url: "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
//   received_events_url:
//     "https://api.github.com/users/hiteshchoudhary/received_events",
//   type: "User",
//   site_admin: false,
//   name: "Hitesh Choudhary",
//   company: null,
//   blog: "https://www.youtube.com/c/HiteshChoudharydotcom",
//   location: "India",
//   email: null,
//   hireable: null,
//   bio: "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
//   twitter_username: "hiteshdotcom",
//   public_repos: 71,
//   public_gists: 1,
//   followers: 7037,
//   following: 0,
//   created_at: "2015-03-23T13:03:25Z",
//   updated_at: "2023-09-09T03:27:44Z",
// };

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/twitter", (req, res) => {
//   res.send("hiteshdotcom");
// });

// app.get("/login", (req, res) => {
//   res.send("<h1>please login at chai aur code</h1>");
// });

// app.get("/youtube", (req, res) => {
//   res.send("<h2>Chai aur code</h2>");
// });

// app.get("/github", (req, res) => {
//   res.json(githubData);
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`);
// });







// console.log("manoj with code"); // "scripts": {
                                // "start" : "node index.js" //
                                 //  }, // we can run code wit using npm run start
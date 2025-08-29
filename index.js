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

app.get("/welcome", (req, res) => {
  res.send("hi,Welcome t0 Express app");
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











// console.log("manoj with code"); // "scripts": {
                                // "start" : "node index.js" //
                                 //  }, // we can run code wit using npm run start
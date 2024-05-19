console.log()(
  "============================= ALAB-318-2-1-express-application ============================="
);
const { response } = require("express");
const { request } = require("express");
const express = require("express");
const app = express();
const port = 3030;
app.set("views", "views");
app.set("view emgine", "ejs");
//----------------------------//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`The server is listening on port: ${port}`);
});

// app.get("/", (request, response) => {
//   response.send("Welcome To My First Express Application");
// });

// app.get("/home", (request, response) => {
//   response.send("Welcome To My First Express Application Home Page");
// });

// app.get("/user/:useID", (request, response) => {
//   response.send(
//     `Welcome to the users page with the id: ${request.params.useID}`
//   );
// });

// app.get("/user/:useID/profile", (request, response) => {
//   response.send(
//     `Welcome to the users profile page with the id: ${request.params.useID}`
//   );
// });

// app.get("/user/:useID/profile/:data", (request, response) => {
//   response.send(
//     `Welcome to the users profile page with the id: ${request.params.useID} with the iformation: ${request.params.data}.`
//   );
// });

//----------------------------------------------------------------------------------------------//
// CHAINING ROUTES POST, GET, PATCH, PUT, DELETE
// app
//   .route("/members")
//   .get((request, response) => {
//     request.send("Get all the members.");
//   })
//   .post((request, response) => {
//     request.send("Create a members.");
//   })
//   .patch((request, response) => {
//     request.send("Update part of the members data");
//   })
//   .put((request, response) => {
//     request.send("Update all of the memebers data");
//   })
//   .delete((request, response) => {
//     request.send("Delete all of the memebers data");
//   });
//----------------------------------------------------------------------------------------------//

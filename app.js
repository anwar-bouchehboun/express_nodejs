const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// static fiels
app.use(express.static('public'))

// Auto refersh 
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});












const Data = require("./models/data");
app.get("/", (req, res) => {
  res.render("home");
  // Data.find()
  //   .then((result) => {
  //     // console.log(result);
  //     // res.render("home", { title: "home page", arr: result });

   
  //   })
    // .catch((err) => {
      // console.log(err);
  //   });
});
app.get("/user/add",(req, res)=>{
  res.render("user/add");
});
app.get("/user/view",(req, res)=>{
  res.render("user/view");
});
app.get("/user/edit",(req, res)=>{
  res.render("user/edit");
});

mongoose
  .connect(
    "mongodb+srv://devnode:XRiqv6Q2CT67Bcdh@cluster0.zxrceea.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// app.post("/", (req, res) => {
//   console.log(req.body);
//   const data = new Data(req.body);
//   data
//     .save()
//     .then(() => {
//       res.redirect("/");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

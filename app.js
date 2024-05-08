const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
const Data = require("./models/data");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  Data.find()
    .then((result) => {
      // console.log(result);
      res.render("home", { title: "home page", arr: result });
    })
    .catch((err) => {
      console.log(err);
    });
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

app.post("/", (req, res) => {
  console.log(req.body);
  const data = new Data(req.body);
  data
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

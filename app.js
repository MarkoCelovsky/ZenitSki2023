const path = require("path");
const express = require("express");
const mainRoutes = require("./routes/index");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoutes);

app.listen(8080, () => {
  console.log("Listening on port: 8080");
});

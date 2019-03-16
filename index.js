const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dev = require("./config/dev");

//Databases
mongoose.connect(dev.mongoURI, { useNewUrlParser: true });
require("./models/Recipe");

//Routes
const projectRoutes = require("./routes/projectRoutes");

//App init
const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(projectRoutes);

//Production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

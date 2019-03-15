const express = require("express");
const bodyParser = require("body-parser");
const dev = require("./config/dev");

const projectRoutes = require("./routes/projectRoutes");

const app = express();

//Middleware
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//Database
mongoose.connect(dev.mongoURI, { useNewUrlParser: true });

//Routes
app.use(projectRoutes);

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

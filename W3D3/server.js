const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const ejs = require("ejs");

const app = express();
const router = express.Router();

const formController = require("./controllers/form");
const loginController = require("./controllers/login");

global.appRoot = path.resolve(__dirname);
global.userData = { username: "YaserAlqasem", password: "123" };

app.set("view engine", "html");
app.engine("html", ejs.renderFile);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

router.use((req, res, next) => {
  let userToken = req.cookies["userToken"];
  if (userToken && userToken == userData.username.concat(userData.password))
    return next();

  if (req.originalUrl == "/login" || req.originalUrl == "/") return next();
  else return res.redirect("/");
});

router.get("/", (req, res) => {
  res.render(path.join(__dirname + "/public" + "/login.html"));
});

router.post("/login", loginController.login);
router.get("/form", formController.getForm);
router.post("/addData", formController.addData);
router.get("/view", formController.displayUserData);

app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

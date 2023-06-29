// 載入 express 並建構應用程式伺服器
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Todo = require("./models/todo");
const exphbs = require("express-handlebars");
const generatePassword = require("./addressShortener");

// 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
// 連線異常
db.on("error", () => {
  console.log("mongodb error!");
});
// 連線成功
db.once("open", () => {
  console.log("mongodb connected!");
});
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");
// 設定首頁路由
app.get("/", (req, res) => {
  res.render("index");
});

// 設定 成功 轉址路由
app.get("/:address", (req, res) => {
  console.log("address", req.params);
  const inputAddress = req.params.address;

  if (inputAddress) {
    return Todo.findOne({ address: inputAddress }).then((todo) => {
      // console.log("addressShortener", todo);

      if (todo != null) {
        res.redirect(todo.name);
      } else {
        res.redirect("/");
      }
    });
  }
});

app.post("/", (req, res) => {
  // 例外處理:若使用者沒有輸入內容，就按下了送出鈕，需要防止表單送出並提示使用者
  if (!req.body.name) {
    return res.render("index", { error: "請重新輸入正確網址" });
  }

  const name = req.body.name;
  let address = "";
  Todo.findOne({ name: name }).then((todo) => {
    if (todo !== null) {
      console.log(todo.address, todo.name);
      res.render("index", { address: todo.address, name: todo.name });
    } else {
      address = generatePassword();
      console.log("success", address);
      return Todo.create({ address, name })
        .then(() => {
          res.render("index", { address: address, name: name });
        })
        .catch((error) => console.log(error));
    }
  });
});

// 設定 port 3000
app.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});

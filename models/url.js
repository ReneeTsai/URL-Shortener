const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const urlSchema = new Schema({
  name: {
    //---用戶輸入的網址---
    type: String, // 資料型別string
    required: true, // 這是個必填欄位
  },
  address: {
    //---縮短網址的5個字元---
    type: String, // 資料型別string
    //required: true
  },
  done: {
    type: Boolean,
  },
});
module.exports = mongoose.model("url", urlSchema);

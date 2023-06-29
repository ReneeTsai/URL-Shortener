## URL Shortener


### 功能

- 輸入網址以獲得短網址

### 環境建置

- node.js
- npm

### 專案安裝流程

1.clone 本專案至本地

```
git clone https://github.com/ReneeTsai/URL-Shortener.git
```

2.終端機輸入指令安裝 express

```
npm i express
```

3.安裝完畢後，設定.env 環境變數連線 MongoDB

```bash
MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority
```

4.終端機輸入指令開啟伺服器，看見 App is running on http://localhost:3000 代表成功

```
nodemon app.js
```

5.開啟任意瀏覽器輸入網址進入網頁

```
http://localhost:3000
```

6.若欲暫停使用

```bash
ctrl + c
```

### 開發工具

- Node.js 18.16.0
- Express 4.18.2
- Express-handlebars 4.0.2
- Dotenv 16.0.3
- Mongoose 5.9.7

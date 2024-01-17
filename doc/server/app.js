const express = require("express");
const app = express();
const cors = require("cors");

// Cors 설정
app.use(cors());
// x-www-form-urlencoded 데이터를 받기 위함
app.use(express.urlencoded({ extended: false }));

// json 데이터를 받기 위함 ( post - body )
app.use(express.json());

const port = 9500;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("서버 실행.... port : " + port);
});

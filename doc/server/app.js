const express = require("express");
const app = express();
const cors = require("cors");
const port = 9500; // 포트 설정

// ------ 앱 설정 ------
// Cors 설정
app.use(cors());
// x-www-form-urlencoded 데이터를 받기 위함
app.use(express.urlencoded({ extended: false }));
// json 데이터를 받기 위함 ( post - body )
app.use(express.json());

// ------ 라우터 ------
// app.js
app.get("/", (req, res) => {
  res.send({ code: 200000, result: "test" });
});

app.use("/product", require("./routes/productRouter"));
app.use("/user", require("./routes/userRouter"));

app.listen(port, () => {
  console.log("서버 실행.... port : " + port);
});

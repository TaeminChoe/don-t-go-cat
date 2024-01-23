const {
  UKNOW_ERROR,
  MISSED_TOKEN,
  INVALID_TOKEN,
} = require("./Constant/responseCode");
const UserDAO = require("./DAO/UserDAO");
const ApiResultDTO = require("./DTO/ApiResultDTO");

function commonErrorHandler(res, error) {
  console.log(error);
  const result = new ApiResultDTO(
    UKNOW_ERROR,
    {},
    "미정의 에러 - 서버에 문의하세요"
  );
  res.status(500).json(result);
}

function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  const prefix = "Bearer ";

  // 예외처리 1. 토큰이 없음
  if (!token) {
    const result = new ApiResultDTO(MISSED_TOKEN, {}, "토큰이 누락되었습니다.");
    res.status(400).json(result);
  }
  const userDAO = new UserDAO();

  // 토큰 유효성 검사
  const userList = userDAO.getUserList();
  const isInvalid = userList.every((user) => {
    // 토큰이 Bearer로 시작할 경우
    if (token.startsWith(prefix)) {
      return user.token !== token.replace(prefix, "");
    }

    // 토큰이 Bearer로 시작하지 않을 경우
    return user.token !== token;
  });
  // 예외처리 2. 토큰이 유효하지 않음
  if (isInvalid) {
    const result = new ApiResultDTO(
      INVALID_TOKEN,
      {},
      "토큰이 유효하지 않습니다."
    );
    res.status(400).json(result);
  }
  // 정상 케이스 : 정상 진행
  else {
    next();
  }
}

module.exports = {
  commonErrorHandler,
  verifyToken,
};

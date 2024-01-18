const { UKNOW_ERROR } = require("./Constant/responseCode");
const ApiResultDTO = require("./DTO/ApiResultDTO");

function commonErrorHandler(res) {
  const result = new ApiResultDTO(
    UKNOW_ERROR,
    {},
    "미정의 에러 - 서버에 문의하세요"
  );
  res.status(500).json(result);
}

module.exports = {
  commonErrorHandler,
};

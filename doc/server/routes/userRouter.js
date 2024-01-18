/**
 * User 관련 API
 */
const express = require("express");
const UserDAO = require("../DAO/UserDAO");
const ApiResultDTO = require("../DTO/ApiResultDTO");
const router = express.Router();
const responseCode = require("../Constant/responseCode");

/**
 * 로그인 ( 토큰 요청 )
 * post - {PUBLIC_URL}/user/token
 * @param {String} id - 아이디
 * @param {String} password - 비밀번호
 */
router.post("/token", async (req, res) => {
  const userDAO = new UserDAO();
  const { id, password } = req.body;
  const { SUCCESS, REQUIRED_EMPTY, EMPTY_DATA, UKNOW_ERROR } = responseCode;
  try {
    const token = userDAO.getToken(req.body);
    // 예외처리 : 필수 값 누락
    if (!id || !password) {
      const result = new ApiResultDTO(REQUIRED_EMPTY, {}, "필수값 누락");
      res.status(400).json(result);
    }
    // 정상 시나리오 : 토큰 반환
    else {
      const result = new ApiResultDTO(
        SUCCESS,
        { token, id: req.body.id },
        "로그인 성공"
      );
      res.json(result);
    }
  } catch (e) {
    // 예외처리 1. 데이터 없을 경우
    if (e.message === EMPTY_DATA) {
      const result = new ApiResultDTO(EMPTY_DATA, {}, "일치하는 정보 없음");
      res.status(400).json(result);
    }
    // 미정의 에러
    else {
      const result = new ApiResultDTO(
        UKNOW_ERROR,
        {},
        "미정의 에러 - 서버에 문의하세요"
      );
      res.status(500).json(result);
    }
  }
});
module.exports = router;

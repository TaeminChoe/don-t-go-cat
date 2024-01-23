const responseCode = {
  SUCCESS: "200000",
  REQUIRED_EMPTY: "400001", // 필수값 누락
  EMPTY_DATA: "400002", // 데이터 없음
  ALREADY_FAVORITE: "400003", // 이미 즐겨찾기 등록
  ALREADY_UN_FAVORITE: "400004", // 이미 즐겨찾기 삭제 됨
  INVALID_TOKEN: "400005", // 토큰이 유효하지 않음
  MISSED_TOKEN: "400006", // 토큰이 누락됨

  UKNOW_ERROR: "999999", // 미정의 에러
};

module.exports = responseCode;

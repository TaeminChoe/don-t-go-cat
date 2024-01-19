const BASE_MOCK_USER_LIST = require("../db/User.json");
const token = require("../Constant/token");
const DAO = require("./DAO");
const responseCode = require("../Constant/responseCode");

class UserDAO extends DAO {
  constructor() {
    super(BASE_MOCK_USER_LIST);
  }

  /**
   * @param {String} id
   * @param {String} password
   * @returns {String} token
   */
  getToken({ id, password }) {
    const list = super.getList();
    const user = list.find(
      (user) => user.id === id && user.password === password
    );

    // 예외 처리 : 일치하는 회원 데이터 없을 경우 에러 반환
    if (!user) {
      throw new Error(responseCode.EMPTY_DATA);
    }
    // CASE3. 일치하는 회원 정보가 있을 경우 토큰 반환
    else {
      return token;
    }
  }

  /**
   *
   * @param {Number} id - 유저 아이디
   * @returns {Object} user 정보
   */
  getUserInfo({ id }) {
    const user = super.get(id);

    // 예외 처리 : 일치하는 회원 데이터 없을 경우 공백 반환
    if (!user) {
      return {};
    } else {
      return user;
    }
  }
}

module.exports = UserDAO;

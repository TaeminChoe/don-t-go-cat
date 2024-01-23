/**
 * UserDTO
 * @class UserDTO
 * @property {String} id - 사용자 고유 ID
 * @property {String} nickname - 사용자 닉네임
 * @property {Number} score - 사용자 점수
 * @property {String} profileImage - 사용자 프로필 이미지
 * @property {String} token - 사용자 토큰
 */
class UserDTO {
  constructor(id, nickname, score, profileImage, token) {
    this.id = id;
    this.nickname = nickname;
    this.score = score;
    this.profileImage = profileImage;
    this.token = token;
  }
}

module.exports = UserDTO;

class UserDTO {
  constructor(id, username, score, profileImage, token) {
    this.id = id;
    this.username = username;
    this.score = score;
    this.profileImage = profileImage;
    this.token = token;
  }
}

module.exports = UserDTO;

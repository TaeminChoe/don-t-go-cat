class ApiResultDTO {
  constructor(code, result, message) {
    this.code = code;
    this.result = result;
    this.message = message;
  }
}

module.exports = ApiResultDTO;

/**
 * 즐겨찾기 관련 데이터에 접근하는 DAO 클래스입니다.
 */

const DAO = require("./DAO");
const data = require("../db/Favorite.json");
const responseCode = require("../Constant/responseCode");

class FavoriteDAO extends DAO {
  constructor() {
    super(data);
  }

  /**
   * @description 즐겨찾기 여부를 반환합니다.
   * @param {Number} userId - 유저 아이디
   * @param {Number} productId - 상품 아이디
   */
  getIsFavorite({ userId, productId }) {
    const list = super.getList();
    const favorite = list.find(
      (item) => item.userId === userId && item.productId === productId
    );

    return !!favorite ? "Y" : "N";
  }

  /**
   * @description 즐겨찾기를 추가합니다.
   * @param {Number} userId - 유저 아이디
   * @param {Number} productId - 상품 아이디
   */
  addFavorite({ userId, productId }) {
    // 등록 전 중복 체크
    const isFavorite = this.getIsFavorite({ userId, productId });

    if (isFavorite === "Y") {
      throw new Error(responseCode.ALREADY_FAVORITE);
    } else {
      data.push({
        userId,
        productId,
        favoriteId: Math.max(...data.map((item) => item.favoriteId)) + 1,
      });
    }
  }

  /**
   * @description 즐겨찾기를 삭제합니다.
   * @param {Number} userId - 유저 아이디
   * @param {Number} productId - 상품 아이디
   */
  deleteFavorite({ userId, productId }) {
    const index = data.findIndex(
      (item) => item.userId === userId && item.productId === productId
    );

    if (index === -1) {
      throw new Error(responseCode.ALREADY_UN_FAVORITE);
    } else {
      data.splice(index, 1);
    }
  }
}

module.exports = FavoriteDAO;

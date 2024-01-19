const ProductDTO = require("../DTO/ProductDTO");
const ProductDetailDTO = require("../DTO/ProductDetailDTO");
const BASE_MOCK_PRODUCT_LIST = require("../db/Product.json");
const DAO = require("./DAO");
const FavoriteDAO = require("./FavoriteDAO");
const UserDAO = require("./UserDAO");

/**
 * @description 상품DAO 클래스입니다.
 */
class ProductDAO extends DAO {
  constructor() {
    super(BASE_MOCK_PRODUCT_LIST);
  }
  /**
   * @description 상품 리스트 조회 기능
   * @param {String} category - 카테고리
   * @param {String} keyword - 키워드 ( 키워드 조회시 사용 )
   * @param {Number} userId - 유저 아이디 ( 판매자 조회시 사용 )
   * @param {Number} cursor - 커서
   * @param {Number} count - 조회 개수
   * @returns {Array}
   */
  getProductList({
    category, // 카테고리
    keyword, // 카테고리 조회값
    userId, // 유저 아이디
    cursor = 0, // 커서
    count = 99999, // 조회 개수
  }) {
    /** 검색 조건 */
    const filterCondition = (item) => {
      // CASE1. 카테고리가 없을 경우
      if (!category) {
        return true;
      }
      // CASE2. 검색어 기반 카테고리 조회
      // title / description 기반 검색
      else if (category === "keyword") {
        return (
          item.title.toUpperCase().includes(keyword.toUpperCase()) ||
          item.description.toUpperCase().includes(keyword.toUpperCase())
        );
      }
      // CASE3. 판매자 기반 조회
      else if (category === "user") {
        return item.userId === parseInt(userId);
      }
    };

    // 전체 리스트 개수
    const conditionAllList = super.getList(filterCondition);
    const totalCount = conditionAllList.length;
    const list = conditionAllList.slice(cursor, cursor + count);

    return {
      totalCount,
      list: list.map((item) => {
        return new ProductDTO(item);
      }),
    };
  }

  /**
   * @description 상품 상세 조회 기능
   * @param {Number} id
   * @returns
   */
  getDetail(id) {
    const product = super.get(id);
    const user = new UserDAO().getUserInfo({ id: product.userId });
    const favoriteYn = new FavoriteDAO().getIsFavorite({
      userId: 1,
      productId: id,
    });

    const productDTO = new ProductDetailDTO({
      ...product,
      seller: user,
      favoriteYn,
    });
    return productDTO;
  }
}

module.exports = ProductDAO;

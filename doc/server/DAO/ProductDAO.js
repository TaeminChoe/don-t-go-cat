const ProductDTO = require("../DTO/ProductDTO");
const ProductDetailDTO = require("../DTO/ProductDetailDTO");
const BASE_MOCK_PRODUCT_LIST = require("../db/Product.json");
const DAO = require("./DAO");

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
   * @param {String} categoryValue - 카테고리 조회값
   * @param {Number} cursor - 커서
   * @param {Number} count - 조회 개수
   * @returns {Array}
   */
  getProductList({
    category, // 카테고리
    categoryValue, // 카테고리 조회값
    cursor, // 커서
    count, // 조회 개수
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
          item.title.toUpperCase().includes(categoryValue.toUpperCase()) ||
          item.description.toUpperCase().includes(categoryValue.toUpperCase())
        );
      }
      // CASE3. 판매자 기반 조회
      else if (category === "nickname") {
        return item.sellerNickname === categoryValue;
      }
    };

    return super.getList(filterCondition, cursor, count).map((item) => {
      return new ProductDTO(item);
    });
  }

  /**
   * @description 상품 상세 조회 기능
   * @param {Number} id
   * @returns
   */
  getDetail(id) {
    return new ProductDetailDTO(super.get(id));
  }
}

module.exports = ProductDAO;

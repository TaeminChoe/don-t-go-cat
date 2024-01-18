const ProductDTO = require("./ProductDTO");

/**
 * 상품 상세 정보를 담는 DTO
 */
class ProductDetailDTO extends ProductDTO {
  constructor({
    id,
    title,
    date,
    bannerImages,
    description,
    sellectNickname,
    favoriteYn,
    price,
  }) {
    super({ id, title, date, bannerImages });
    this.sellectNickname = sellectNickname;
    this.favoriteYn = favoriteYn;
    this.price = price;
    this.description = description;
  }
}

module.exports = ProductDetailDTO;

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
    sellerNickname,
    userId,
    favoriteYn,
    price,
  }) {
    super({ id, title, date, bannerImages });
    this.sellerNickname = sellerNickname;
    this.userId = userId;
    this.favoriteYn = favoriteYn;
    this.price = price;
    this.description = description;
    this.seller = {};
  }

  setSeller(seller) {
    this.seller = {
      id: seller.id,
      nickname: seller.nickname,
      score: seller.score,
      profileImage: seller.profileImage,
    };
  }
}

module.exports = ProductDetailDTO;

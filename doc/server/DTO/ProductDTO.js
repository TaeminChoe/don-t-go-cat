/**
 * 상품 정보를 담는 DTO
 */
class ProductDTO {
  constructor({ id, title, date, bannerImages }) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.bannerImages = bannerImages;
  }
}

module.exports = ProductDTO;

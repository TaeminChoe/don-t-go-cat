/**
 * 상품 관련 API
 */
const express = require("express");
const ProductDAO = require("../DAO/ProductDAO");
const router = express.Router();
const responseCode = require("../Constant/responseCode");
const ApiResultDTO = require("../DTO/ApiResultDTO");
const { commonErrorHandler } = require("../utils");
/**
 * 상품 리스트 조회
 * [GET] - {PUBLIC_URL}/product/list
 * @param {Number} cursor - 커서
 * @param {Number} count - 조회 개수
 * @param {String} category - 카테고리
 * @param {String} categoryValue - 카테고리 조회값
 */
router.get("/list", async (req, res) => {
  const param = req.query;
  try {
    const productDAO = new ProductDAO();
    res.json(
      new ApiResultDTO(
        responseCode.SUCCESS,
        productDAO.getProductList(param),
        "상품 리스트 조회 성공"
      )
    );
  } catch (e) {
    commonErrorHandler(res);
  }
});

/**
 * 상품 상세 조회
 * [GET] - {PUBLIC_URL}/product/detail
 * @param {Number} id - 상품 id
 */
router.get("/detail", async (req, res) => {
  try {
    const id = req.query.param.id;
    // 예외처리 1. 필수값 누락
    if (!id) {
      res
        .status(400)
        .json(new ApiResultDTO(responseCode.REQUIRED_EMPTY, {}, "필수값 누락"));
    }

    const productDAO = new ProductDAO();
    const result = productDAO.getDetail(parseInt(id));

    res.json(
      new ApiResultDTO(responseCode.SUCCESS, result, "상품 상세 조회 성공")
    );
  } catch (error) {
    commonErrorHandler(res);
  }
});

module.exports = router;

/**
 * 상품 관련 API
 */
const express = require("express");
const ProductDAO = require("../DAO/ProductDAO");
const router = express.Router();
const responseCode = require("../Constant/responseCode");
const ApiResultDTO = require("../DTO/ApiResultDTO");
const { commonErrorHandler } = require("../utils");
const allKeyword = require("../Constant/keyword");
const FavoriteDAO = require("../DAO/FavoriteDAO");
const { verifyToken } = require("../utils");
/**
 * 상품 리스트 조회
 * [GET] - {PUBLIC_URL}/product/list
 * @param {Number} cursor - 커서
 * @param {Number} count - 조회 개수
 * @param {String} category - 카테고리
 * @param {String} keyword - 키워드 ( 키워드 조회시 사용 )
 * @param {Number} userId - 유저 아이디 ( 판매자 조회시 사용 )
 */
router.get("/list", verifyToken, async (req, res) => {
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
    commonErrorHandler(res, e);
  }
});

/**
 * 상품 상세 조회
 * [GET] - {PUBLIC_URL}/product/detail
 * @param {Number} id - 상품 id
 */
router.get("/detail", verifyToken, async (req, res) => {
  try {
    const id = req.query.id;
    // 예외처리 1. 필수값 누락
    if (!id) {
      res
        .status(400)
        .json(new ApiResultDTO(responseCode.REQUIRED_EMPTY, {}, "필수값 누락"));

      return false;
    }

    const productDAO = new ProductDAO();
    const result = productDAO.getDetail(parseInt(id));

    res.json(
      new ApiResultDTO(responseCode.SUCCESS, result, "상품 상세 조회 성공")
    );
  } catch (error) {
    commonErrorHandler(res, error);
  }
});

/**
 * 상품 키워드 조회 : 상품명에서 키워드를 추출하여 반환
 * [GET] - {PUBLIC_URL}/product/keyword
 * @param {String} keyword - 키워드
 */
router.get("/keyword", verifyToken, async (req, res) => {
  try {
    const { keyword } = req.query;

    // 예외처리 1. 키워드 누락 : 별도 에러 처리 하지않고 빈 배열 반환
    if (!keyword) {
      res.json(new ApiResultDTO(responseCode.SUCCESS, [], "키워드 조회"));

      return false;
    }
    const keywordList = allKeyword
      .filter((item) => item.includes(keyword))
      .slice(0, 100);
    const resultDTO = new ApiResultDTO(
      responseCode.SUCCESS,
      keywordList,
      "키워드 조회"
    );
    res.json(resultDTO);
  } catch (error) {
    commonErrorHandler(res);
  }
});

/**
 * 즐겨찾기 등록
 * [POST] - {PUBLIC_URL}/product/favorite
 */
router.post("/favorite", verifyToken, async (req, res) => {
  try {
    const { userId, productId } = req.body;

    // 예외처리 1. 필수값 누락
    if (!userId || !productId) {
      res
        .status(400)
        .json(new ApiResultDTO(responseCode.REQUIRED_EMPTY, {}, "필수값 누락"));

      return false;
    }

    const favoriteDAO = new FavoriteDAO();
    favoriteDAO.addFavorite({ userId, productId });

    res.json(new ApiResultDTO(responseCode.SUCCESS, {}, "즐겨찾기 등록 성공"));
  } catch (error) {
    if (error.message === responseCode.ALREADY_FAVORITE) {
      res
        .status(400)
        .json(
          new ApiResultDTO(
            responseCode.ALREADY_FAVORITE,
            {},
            "이미 즐겨찾기 등록됨"
          )
        );
    } else {
      commonErrorHandler(res, error);
    }
  }
});

/**
 * 즐겨찾기 삭제
 * [DELETE] - {PUBLIC_URL}/product/favorite
 */
router.delete("/favorite", verifyToken, async (req, res) => {
  try {
    const { userId, productId } = req.body;

    // 예외처리 1. 필수값 누락
    if (!userId || !productId) {
      res
        .status(400)
        .json(new ApiResultDTO(responseCode.REQUIRED_EMPTY, {}, "필수값 누락"));

      return false;
    }

    const favoriteDAO = new FavoriteDAO();
    favoriteDAO.deleteFavorite({ userId, productId });

    res.json(new ApiResultDTO(responseCode.SUCCESS, {}, "즐겨찾기 삭제 성공"));
  } catch (error) {
    if (error.message === responseCode.ALREADY_UN_FAVORITE) {
      res
        .status(400)
        .json(
          new ApiResultDTO(
            responseCode.ALREADY_UN_FAVORITE,
            {},
            "이미 즐겨찾기 삭제됨"
          )
        );
    } else {
      commonErrorHandler(res, error);
    }
  }
});

module.exports = router;

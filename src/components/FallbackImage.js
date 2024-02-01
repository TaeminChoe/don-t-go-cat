import { BASENAME } from "system/URL";

/**
 * 이미지 로딩 실패시 대체 이미지를 보여주는 컴포넌트
 * @property {string} imgSrc - 이미지 주소
 * @property {string} fallbackImg - 대체 이미지 주소
 * @property {function} handleError - 이미지 로딩 실패시 호출할 커스텀 함수
 */
const FallbackImage = (props) => {
  const { imgSrc, fallbackImg, handleError = () => {}, ...otherProps } = props;
  return (
    <img
      src={imgSrc}
      alt="아이템"
      onError={(e) => {
        e.target.src = fallbackImg || `${BASENAME}/assets/img/sample500.png`;
        handleError();
      }}
      {...otherProps}
    />
  );
};

export default FallbackImage;

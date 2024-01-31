import { BASENAME } from "system/URL";

const FallbackImage = ({ imgSrc, fallbackImg }) => {
  return (
    <img
      src={imgSrc}
      alt="아이템"
      onError={(e) => {
        e.target.src = fallbackImg || `${BASENAME}/assets/img/sample500.png`;
      }}
    />
  );
};

export default FallbackImage;

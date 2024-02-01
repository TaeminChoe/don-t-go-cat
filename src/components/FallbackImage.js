import { BASENAME } from "system/URL";

const FallbackImage = (props) => {
  const { imgSrc, fallbackImg } = props;
  return (
    <img
      src={imgSrc}
      alt="아이템"
      onError={(e) => {
        e.target.src = fallbackImg || `${BASENAME}/assets/img/sample500.png`;
      }}
      {...props}
    />
  );
};

export default FallbackImage;

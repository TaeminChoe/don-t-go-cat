import { BASENAME } from "system/URL";

const FallbackImage = ({ src }) => {
  return (
    <img
      src={src}
      alt="아이템"
      onError={(e) => {
        e.target.src = `${BASENAME}/assets/img/sample500.png`;
      }}
    />
  );
};

export default FallbackImage;

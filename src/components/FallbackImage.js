const FallbackImage = ({ imgSrc, fallbackImg }) => {
  return (
    <img
      src={imgSrc}
      alt="아이템"
      onError={(e) => {
        e.target.src = fallbackImg;
      }}
    />
  );
};

export default FallbackImage;

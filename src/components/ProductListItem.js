const ProductListItem = ({ product, targetRef, idx }) => {
  const { title, img, date } = product;

  return (
    <div>
      <div style={{ float: "left", width: "200px" }} ref={targetRef}>
        <div style={{ color: "blue", fontSize: "20px" }}>
          {/* <img src={img} width="200px" /> */}
          {idx}
        </div>
        <div>
          <span>{title}</span>
        </div>
        <div>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;

const ProductListItem = ({ product, targetRef }) => {
  const { title, img, date } = product;

  return (
    <div>
      <div style={{ float: "left", width: "200px" }} ref={targetRef}>
        <div>
          <img src={img} width="200px" />
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

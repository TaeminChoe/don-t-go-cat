const ProductListItem = ({ product, style }) => {
  const { title, img, date } = product;

  return (
    <div style={{ ...style }}>
      <div style={{ float: "left", width: "200px" }}>
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

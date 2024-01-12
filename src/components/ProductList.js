import ProductListItem from "./ProductListItem";
import { List, AutoSizer } from "react-virtualized";

const ProductList = ({ products }) => {
  const rowRenderer = ({ index, key, style }) => {
    const product = products[index];
    return <ProductListItem product={product} key={key} style={style} />;
  };

  return (
    <div style={{ height: "100vh" }}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            className="ProductList"
            width={width} // 전체 크기
            height={height || 0} // 전체 높이
            rowCount={products.length} // 항목 개수
            rowHeight={270} // 항목 높이
            rowRenderer={rowRenderer} // 항목 렌더링 시 쓰는 함수
            list={products} // 배열
            style={{ outline: "none" }} // List에 기본 적용되는 outline 스타일 제거
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default ProductList;

import { useEffect, useState } from "react";
import Layout from "components/Layout";
import ProductList from "components/ProductList";
import { getProducts } from "system/axios/api/product";

// 한 번에 불러올 데이터 수
const onceCount = 20;

const HomePage = () => {
  const [viewProducts, setViewProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [cursor, setCursor] = useState(0);

  // 데이터 가져오는 함수(loadMore : 추가로 가져올 때 true)
  const handleGetProduct = (loadMore = false) => {
    const params = {
      count: onceCount,
      cursor: cursor,
    };

    const queryString = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&");

    getProducts(queryString).then((res) => {
      const { list, totalCount } = res.data.result;
      if (loadMore) {
        setViewProducts(viewProducts.concat(list));
      } else {
        setViewProducts(list);
      }
      setTotalCount(totalCount);
      setCursor(cursor + onceCount);
    });
  };

  useEffect(() => {
    handleGetProduct(false);
  }, []);

  return (
    <Layout>
      <ProductList
        viewProducts={viewProducts}
        hasMore={totalCount >= cursor}
        next={() => {
          handleGetProduct(true);
        }}
      />
    </Layout>
  );
};
export default HomePage;

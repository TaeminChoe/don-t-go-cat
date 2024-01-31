import { Suspense, lazy, useEffect, useState } from "react";
import Layout from "components/Layout";
import { getProductsNew } from "system/axios/api/product";
import getSuspender from "utils/getSuspender";
import SkeletonLoading from "components/SkeletonLoading";

// 한 번에 불러올 데이터 수
const onceCount = 20;

const ProductList = lazy(() => import("components/ProductList"));

const HomePage = () => {
  const [viewProducts, setViewProducts] = useState();
  const [totalCount, setTotalCount] = useState(0);
  const [cursor, setCursor] = useState(0);

  // 데이터 가져오는 함수(loadMore : 추가로 가져올 때 true)
  const handleGetProduct = async () => {
    const params = {
      count: onceCount,
      cursor: cursor,
    };

    if (cursor === 0) {
      await (() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
      })();
    }

    getProductsNew(params).then((res) => {
      const { list, totalCount } = res.data.result;
      setViewProducts((prev = []) => [...prev, ...list]);

      setTotalCount(totalCount);
      setCursor(cursor + onceCount);
    });
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  return (
    <Layout>
      <Suspense fallback={<SkeletonLoading />}>
        <PromiseWrapper isLoading={!viewProducts}>
          <ProductList
            viewProducts={viewProducts}
            hasMore={totalCount >= cursor}
            next={() => {
              handleGetProduct();
            }}
          />
        </PromiseWrapper>
      </Suspense>
    </Layout>
  );
};
export default HomePage;

const PromiseWrapper = (props) => {
  const { isLoading } = props;

  if (isLoading) throw new Promise(() => {});

  return { ...props.children };
};

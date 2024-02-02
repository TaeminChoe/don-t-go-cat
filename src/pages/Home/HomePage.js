import { Suspense, lazy, useEffect, useState } from "react";
import Layout from "components/Layout";
import { getProductsNew } from "system/axios/api/product";
import SkeletonLoading from "loading/SkeletonLoading";

// 한 번에 불러올 데이터 수
const REQUEST_COUNT = 20;

const ProductList = lazy(() => import("components/ProductList"));

const HomePage = () => {
  const [viewProducts, setViewProducts] = useState();
  const [totalCount, setTotalCount] = useState(0);
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    handleGetProduct();
  }, []);

  // 데이터 가져오는 함수(loadMore : 추가로 가져올 때 true)
  const handleGetProduct = async () => {
    const params = {
      count: REQUEST_COUNT,
      cursor: cursor,
    };

    // 첫 조회일 때 스켈레톤을 길게 표출 하기 위한 로직
    if (!cursor) {
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
      setCursor(cursor + REQUEST_COUNT);
    });
  };

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
            cursor={cursor}
          />
        </PromiseWrapper>
      </Suspense>
    </Layout>
  );
};
export default HomePage;

/** Loading중 Promise를 throw해 suspense의 fallback을 표출시키기 위한 Wrapper Component */
const PromiseWrapper = (props) => {
  const { isLoading } = props;

  if (isLoading) throw new Promise(() => {});

  return { ...props.children };
};

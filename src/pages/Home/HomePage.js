import { Suspense, lazy, useEffect, useState } from "react";
import Layout from "components/Layout";
import { getProducts } from "system/axios/api/product";
import getSuspender from "utils/getSuspender";
import SkeletonLoading from "components/SkeletonLoading";
import { openModal } from "system/recoil/modal";
import { useSetRecoilState } from "recoil";

// 한 번에 불러올 데이터 수
const onceCount = 20;

const ProductList = lazy(() => import("components/ProductList"));

const HomePage = () => {
  const [viewProducts, setViewProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [cursor, setCursor] = useState(0);
  const showModal = useSetRecoilState(openModal);

  // 데이터 가져오는 함수(loadMore : 추가로 가져올 때 true)
  const handleGetProduct = (loadMore = false) => {
    const params = {
      count: onceCount,
      cursor: cursor,
    };

    const queryString = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&");

    getProducts(queryString)
      .then((res) => {
        const { list, totalCount } = res.data.result;
        if (loadMore) {
          setViewProducts(viewProducts.concat(list));
        } else {
          setViewProducts(list);
        }
        setTotalCount(totalCount);
        setCursor(cursor + onceCount);
      })
      .catch((error) => {
        showModal({ content: error.message });
      });
  };

  useEffect(() => {
    handleGetProduct(false);
  }, []);

  return (
    <Layout>
      <Suspense fallback={<SkeletonLoading />}>
        <ProductList
          viewProducts={viewProducts}
          hasMore={totalCount >= cursor}
          next={() => {
            handleGetProduct(true);
          }}
        />
      </Suspense>
    </Layout>
  );
};
export default HomePage;

import { apiTest } from "utils/api";

import Layout from "components/Layout";
import ProductList from "components/ProductList";
import Mock from "../../Mock.json";

const HomePage = () => {
  const handleClick = () => {
    apiTest().then(console.log).catch(console.error);
    // apiTest({ useLoading: false }).then(console.log).catch(console.error);
  };

  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};
export default HomePage;

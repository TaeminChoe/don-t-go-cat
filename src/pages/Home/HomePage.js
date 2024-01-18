import { apiTest } from "utils/api";

import Layout from "components/Layout";
import { URL_PRODUCT_DETAIL } from "system/URL";
import { Link } from "react-router-dom";

const HomePage = () => {
  const handleClick = (isLoading = true) => {
    apiTest().then(console.log).catch(console.error);
  };

  return (
    <Layout>
      <h1>Home Page</h1>
      <button type="button" onClick={handleClick}>
        API 테스트
      </button>
      <Link to={`${URL_PRODUCT_DETAIL}/1`}>detail 이동</Link>
    </Layout>
  );
};
export default HomePage;

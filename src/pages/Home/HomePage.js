import { apiTest } from "utils/api";

import Layout from "components/Layout";

const HomePage = () => {
  const handleClick = () => {
    apiTest().then(console.log).catch(console.error);
  };

  return (
    <Layout>
      <h1>Home Page</h1>
      <button type="button" onClick={handleClick}>
        API 테스트
      </button>
    </Layout>
  );
};
export default HomePage;

import ProductList from "components/ProductList";
import { apiTest } from "utils/api";
import MOCK_DATA from "../../MOCK_DATA.json";

const HomePage = () => {
  const handleClick = () => {
    apiTest().then(console.log).catch(console.error);
  };

  return (
    <>
      <h1>Home Page</h1>
      <button type="button" onClick={handleClick}>
        API 테스트
      </button>
      <ProductList products={MOCK_DATA} />
    </>
  );
};
export default HomePage;

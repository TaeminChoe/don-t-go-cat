import { apiTest } from "utils/api";

import HeaderMain from "components/HeaderMain";
import CustomHeaderLayout from "components/Layout";

const HomePage = () => {
  const handleClick = () => {
    apiTest().then(console.log).catch(console.error);
  };

  return (
    <CustomHeaderLayout Header={HeaderMain}>
      <h1>Home Page</h1>
      <button type="button" onClick={handleClick}>
        API 테스트
      </button>
    </CustomHeaderLayout>
  );
};
export default HomePage;

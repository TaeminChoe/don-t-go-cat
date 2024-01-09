import { apiTest } from "utils/api";

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
    </>
  );
};
export default HomePage;

/** 로그인 페이지 */
const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // 전역상태 관리 툴 이용해서 로그인 동작
  };
  return (
    <div>
      <h1>Login Page</h1>
      <button type="button" onClick={handleLogin}>
        로그인하기
      </button>
    </div>
  );
};

export default LoginPage;

import { useState } from "react";
import { showModal } from "system/common";

/** 로그인 페이지 */
const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("희연 로그인 버튼 클릭");
    // 전역상태 관리 툴 이용해서 로그인 동작
    showModal("팝업 내용이 들어갈 자리입니다 ~");
  };
  return (
    <div>
      <form>
        <fieldset>
          <div className="title-container">
            <div className="title-background">
              <h1 className="title">Login</h1>
            </div>
          </div>
          <div className="textfield-container">
            <input
              type="text"
              name="id"
              id="id"
              placeholder="아이디를 입력해주세요"
            />
          </div>
          <div className="textfield-container">
            <input
              type="password"
              name="pw"
              id="pw"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <div className="login-button-container">
            <button onClick={handleLogin}>로그인</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginPage;

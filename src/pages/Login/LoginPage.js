import { useState } from "react";
import { checkInAuth, showModal } from "system/common";

/** 로그인 페이지 */
const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    showModal({ content: "등록완료 ~", clickAction: checkInAuth });
  };
  return (
    <div id="login">
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

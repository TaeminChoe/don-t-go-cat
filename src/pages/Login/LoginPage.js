import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { checkAuthState } from "system/recoil/checkAuth";
import { openModal } from "system/recoil/modal";

/** 로그인 페이지 */
const LoginPage = () => {
  const checkInAuth = useSetRecoilState(checkAuthState);
  const showModal = useSetRecoilState(openModal);
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    const { id, pw } = data;

    if (id === "") {
      showModal({ content: "아이디를 입력해주세요." });
      return;
    }
    if (pw === "") {
      showModal({ content: "비밀번호를 입력해주세요." });
      return;
    }

    showModal({
      content: "등록이 완료 ~",
      clickAction: () => {
        checkInAuth(true);
      },
    });
  };

  return (
    <div id="login">
      <form onSubmit={handleSubmit(handleLogin)}>
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
              {...register("id")}
            />
          </div>
          <div className="textfield-container">
            <input
              type="password"
              name="pw"
              id="pw"
              placeholder="비밀번호를 입력해주세요"
              {...register("pw")}
            />
          </div>
          <div className="login-button-container">
            <button type="submit">로그인</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginPage;

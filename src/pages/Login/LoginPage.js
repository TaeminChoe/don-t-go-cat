import { useState } from "react";
import { useForm } from "react-hook-form";
import { checkInAuth, showConfirmModal } from "system/common";

/** 로그인 페이지 */
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const { id, pw } = data;
    /*
    if (id === "") {
      showConfirmModal({ content: "아이디를 입력해주세요." });
      return;
    }
    if (pw === "") {
      showConfirmModal({ content: "비밀번호를 입력해주세요." });
      return;
    }
    */
    showConfirmModal({
      content: "등록이 완료 ~",
      clickAction: () => {
        checkInAuth();
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
              {...register("id", { required: "아이디를 입력해주세요." })}
            />
          </div>
          <div className="textfield-container">
            <input
              type="password"
              name="pw"
              id="pw"
              placeholder="비밀번호를 입력해주세요"
              {...register("pw", { required: "비밀번호를 입력해주세요." })}
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

import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useSetRecoilState } from "recoil";
import { postUserAccount } from "system/axios/api/user";
import { checkAuthState } from "system/recoil/checkAuth";
import { openModal } from "system/recoil/modal";
import { SHA256 } from "crypto-js";

/** 로그인 페이지 */
const LoginPage = () => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();
  const checkInAuth = useSetRecoilState(checkAuthState);
  const showModal = useSetRecoilState(openModal);

  // 데이터를 post하는 경우 useMutation을 사용
  const mutationPostUserAccount = useMutation(postUserAccount, {
    onSuccess: (res) => {
      const { result } = res.data;
      const userInfo = {
        id: result.id,
        token: result.token,
      };

      // 사용자 정보를 캐시에 저장
      queryClient.setQueryData("userAccount", result);
      // 토큰이랑 id는 스토리지에 저장 (키에 id를 넣고 값에 token을 넣을지 아니면 id랑 token을 모두 값에 넣을것인지 ..?)
      // sessionStorage.setItem(result.id, result.token);
      // sessionStorage.setItem("userInfo",JSON.stringify(result.token));

      // 로그인 성공 팝업 표출
      showModal({
        content: "로그인에 성공했습니다.",
        clickAction: () => {
          checkInAuth(true);
        },
      });
    },
    onError: () => {
      showModal({ content: "로그인에 실패했습니다." });
      reset();
    },
  });

  const onSubmit = (data) => {
    const { id, pwd } = data;
    if (id === "") {
      showModal({ content: "아이디를 입력해주세요." });
      return;
    }
    if (pwd === "") {
      showModal({ content: "비밀번호를 입력해주세요." });
      return;
    }

    /** SH256 해시 알고리즘을 이용한 암호화 */
    const hashPassword = SHA256(pwd).toString();

    mutationPostUserAccount.mutate({ id, pwd: hashPassword });
  };

  return (
    <div id="login">
      <form onSubmit={handleSubmit(onSubmit)}>
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
              name="pwd"
              id="pwd"
              placeholder="비밀번호를 입력해주세요"
              {...register("pwd")}
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

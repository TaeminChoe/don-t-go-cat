import { BASENAME } from "system/URL";
import { useHistory } from "react-router-dom";

const HeaderBack = () => {
  const nav = useHistory();

  const handleGoBack = (e) => {
    e.preventDefault();
    nav.goBack();
  };

  return (
    <header id="detailHeader">
      <a className="back" id="backIcon" onClick={handleGoBack}>
        <img src={`${BASENAME}/assets/icon/back.svg`} alt="뒤로가기" />
      </a>
    </header>
  );
};

export default HeaderBack;

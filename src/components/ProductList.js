import { BASENAME } from "system/URL";

const ProductList = ({ products = [], title = "" }) => {
  return (
    <div id="main">
      <div id="contentContainer" className="is-open">
        {!!title && <div className="mini-title">{title}</div>}
        <div className={`container ${title ? "isTitle" : ""}`}>
          <div className="item">
            <img src={`${BASENAME}/assets/img/sample500.png`} alt="아이템" />
            <div className="title">박희연이 준 z플립5 팝니다..!</div>
            <div className="date">2024-02-17</div>
          </div>
          <div className="item">
            <img src={`${BASENAME}/assets/img/sample500.png`} alt="아이템" />
            <div className="title">늦은 밤 너의 집 앞 골목길에서</div>
            <div className="date">2024-02-17</div>
          </div>
          <div className="item">
            <img src={`${BASENAME}/assets/img/sample500.png`} alt="아이템" />
            <div className="title">
              오래되었어 그 때 너의 웃음 너의 목소리 잊혀진것같아
            </div>
            <div className="date">2024-02-17</div>
          </div>
          <div className="item">
            <img src={`${BASENAME}/assets/img/sample500.png`} alt="아이템" />
            <div className="title">
              그런데 이게 뭐랄까 난 나 술한잔 하면서 괜찮은 듯 얘기 하며 널
              덜어내었는데
            </div>
            <div className="date">2024-02-17</div>
          </div>
          <div className="item">
            <img src={`${BASENAME}/assets/img/sample500.png`} alt="아이템" />
            <div className="title">구찌 남자벨트 판매합니다.</div>
            <div className="date">2024-02-17</div>
          </div>
          <div className="item">
            <img src={`${BASENAME}/assets/img/sample500.png`} alt="아이템" />
            <div className="title">Mac Air 싸게 팝니다</div>
            <div className="date">2024-02-17</div>
          </div>
          <div className="item">
            <img src={`${BASENAME}/assets/img/sample500.png`} alt="아이템" />
            <div className="title">딥다이브 팝니다</div>
            <div className="date">2024-02-17</div>
          </div>
          <div className="item">
            <img src={`${BASENAME}/assets/img/sample500.png`} alt="아이템" />
            <div className="title">신입사원 구합니다 react 개발자 우대</div>
            <div className="date">2024-02-17</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

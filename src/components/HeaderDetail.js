const HeaderDetail = () => {
  return (
    <header id="detailHeader">
      <a className="back" id="backIcon">
        <img
          src={`${process.env.PUBLIC_URL}/assets/icon/back.svg`}
          alt="로고"
        />
      </a>
    </header>
  );
};

export default HeaderDetail;

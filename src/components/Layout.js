import Footer from "./Footer";
import HeaderDetail from "./HeaderDetail";
import HeaderMain from "./HeaderMain";
import HeaderSearch from "./HeaderSearch";

const Layout = ({ children, headerType }) => {
  return (
    <div>
      {headerType === "main" && <HeaderMain />}
      {headerType === "detail" && <HeaderDetail />}
      {headerType === "search" && <HeaderSearch />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

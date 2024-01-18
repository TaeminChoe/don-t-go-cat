import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children = () => <></>, CustomHeader }) => {
  const isHeader = !!CustomHeader;

  return (
    <>
      {isHeader ? <CustomHeader /> : <Header />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;

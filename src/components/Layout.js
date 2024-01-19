import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ id, className, children = () => <></>, CustomHeader }) => {
  const isHeader = !!CustomHeader;

  return (
    <div className={className} id={id}>
      {isHeader ? <CustomHeader /> : <Header />}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;

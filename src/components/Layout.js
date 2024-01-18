import Footer from "./Footer";

const CustomHeaderLayout = ({ children = () => <></>, Header }) => {
  const isHeader = !!Header;

  return (
    <>
      {isHeader && <Header />}
      {children}
      <Footer />
    </>
  );
};

export default CustomHeaderLayout;

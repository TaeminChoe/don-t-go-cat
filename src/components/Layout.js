import Header from "./Header";

const Layout = ({
  children = () => <></>,
  id = "",
  className = "",
  CustomHeader,
  HeaderOptions = {},
  CustomFooter,
  FooterOptions = {},
}) => {
  const isHeader = !!CustomHeader;
  const isFooter = !!CustomFooter;

  return (
    <div className={className} id={id}>
      {isHeader ? <CustomHeader {...HeaderOptions} /> : <Header />}
      {children}
      {isFooter ? <CustomFooter {...FooterOptions} /> : <></>}
    </div>
  );
};

export default Layout;

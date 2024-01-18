import Header from "./Header";

const Layout = ({
  children = () => <></>,
  className = "",
  CustomHeader,
  HeaderOptions = {},
  CustomFooter,
  FooterOptions = {},
}) => {
  const isHeader = !!CustomHeader;
  const isFooter = !!CustomFooter;

  return (
    <div className={className}>
      {isHeader ? <CustomHeader {...HeaderOptions} /> : <Header />}
      {children}
      {isFooter ? <CustomFooter {...FooterOptions} /> : <></>}
    </div>
  );
};

export default Layout;

import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({
  header = true,
  footer = true,
  showMenuItem = false,
  ...props
}) => {
  return (
    <React.Fragment>
      {header && <Header showMenuItems={showMenuItem} />}
      {props.children}
      {footer && <Footer />}
    </React.Fragment>
  );
};

export default Layout;

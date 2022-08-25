import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ header = true, footer = true, ...props }) => {
  return (
    <React.Fragment>
      {header && <Header />}
      {props.children}
      {footer && <Footer />}
    </React.Fragment>
  );
};

export default Layout;

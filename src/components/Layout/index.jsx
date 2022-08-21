import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./styles.css";

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

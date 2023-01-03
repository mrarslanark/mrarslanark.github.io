import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ header = true, footer = true, menu, ...props }) => {
  return (
    <Container>
      {header && <Header menu={menu} />}
      {props.children}
      {footer && <Footer />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default Layout;

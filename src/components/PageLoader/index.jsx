import Lottie from "lottie-react";
import React from "react";
import Layout from "../Layout";
import loading from "../../assets/animations/loading.json";
import styled from "styled-components";

const PageLoader = () => {
  return (
    <Layout footer={false}>
      <Container>
        <Lottie
          animationData={loading}
          loop={true}
          autoPlay={true}
          className={"loading-animation"}
        />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
`;

export default PageLoader;

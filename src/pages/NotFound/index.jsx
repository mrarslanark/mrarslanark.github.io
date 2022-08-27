import Lottie from "lottie-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NotFoundImage from "../../assets/animations/404.json";

const NotFound = () => {
  const navigate = useNavigate();

  const onNavigateToHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Lottie animationData={NotFoundImage} loop={true} autoPlay={true} />
      <h2>You've landed somewhere which doesn't exists!</h2>
      <HomeButton onClick={onNavigateToHome}>Home</HomeButton>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100vh;
`;

const HomeButton = styled.p`
  margin: 16px 0px;
  font-size: x-large;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
  }
`;

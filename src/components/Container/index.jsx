import styled from "styled-components";

const Container = ({ children }) => {
  return <Section>{children}</Section>;
};

export default Container;

const Section = styled.div`
  padding: 24px;
`;

import styled from "styled-components";

const Divider = () => {
  return <Container />;
};

const Container = styled.div`
  margin: 24px 0px;
  background-color: ${({ theme }) => theme.divider};
  height: 1px;
`;

export default Divider;

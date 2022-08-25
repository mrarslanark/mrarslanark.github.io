import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Copyright>
        Copyright {new Date().getFullYear()} © | Arslan Mushtaq
      </Copyright>
    </Container>
  );
};

const Container = styled.footer`
  height: 40px;
  background-color: rgba(9, 9, 9);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Copyright = styled.p`
  color: white;
`;

export default Footer;

import styled from "styled-components";
import { device } from "../../constants/theme";

const Introduction = () => {
  return (
    <section>
      <Container>
        <ProfilePicture src="/images/pp.jpg" alt="Profile" />
        <TextContainer>
          <h2>ARSLAN MUSHTAQ</h2>
          <p>
            As a software developer with 4 years of experience, I have a diverse
            set of skills and have worked on a variety of projects in different
            domains including EdTech, FinTech, MedTech, E-Commerce, P2P
            Marketplaces, and B2B Solutions. This broad range of experience has
            given me the ability to adapt to new environments and technologies,
            making me a valuable asset to any development team.
          </p>
        </TextContainer>
      </Container>
    </section>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 80%;
  margin: auto;
  column-gap: 24px;
  padding: 60px 0px;
  @media ${device.mobileS} {
    justify-content: start;
    align-items: start;
    align-content: left;
  }
  @media ${device.tablet} {
    justify-content: center;
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
`;

const ProfilePicture = styled.img`
  border-radius: 100%;
  @media ${device.mobileS} {
    width: 110px;
    height: 110px;
  }
  @media ${device.mobileM} {
    width: 115px;
    height: 115px;
  }
  @media ${device.mobileL} {
    width: 120px;
    height: 120px;
  }
  @media ${device.tablet} {
    width: 125px;
    height: 125px;
  }
  @media ${device.laptop} {
    width: 130px;
    height: 130px;
  }
  @media ${device.laptopL} {
    width: 135px;
    height: 135px;
  }
  @media ${device.desktop} {
    width: 140px;
    height: 140px;
  }
`;

export default Introduction;

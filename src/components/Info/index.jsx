import styled from "styled-components";
import { device } from "../../constants/theme";

const Info = () => {
  return (
    <Section>
      <ProfilePicture src="/images/pp.jpg" alt="Profile" />
      <TextContainer>
        <h2>ARSLAN MUSHTAQ</h2>
        <p>
          I am a Software Engineer with an experience of just over 4 years. I am
          passionate about software development with a keen eye for detail. I am
          willing to work within a multidisciplinary team to expand my
          experience and share my learnings.
        </p>
      </TextContainer>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  width: 80%;
  margin: auto;
  column-gap: 24px;
  padding-top: 90px;
  @media ${device.mobileS} {
    justify-content: start;
    align-items: start;
    align-content: left;
  }
  @media ${device.tablet} {
    justify-content: center;
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

export default Info;

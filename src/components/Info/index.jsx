import styled from "styled-components";
import { device } from "../../constants/theme";

const Info = () => {
  return (
    <Section>
      <ProfilePicture src="/images/pp.jpg" alt="Profile" />
      <Title>ARSLAN MUSHTAQ</Title>
      <Description>
        I am a Software Engineer with an experience of just over 7 years. I am
        passionate about software development with a keen eye for detail. I am
        willing to work within a multidisciplinary team to expand my experience
        and share my learnings.
      </Description>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media ${device.mobileS} {
    justify-content: start;
    align-items: start;
    align-content: left;
  }
  @media ${device.tablet} {
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;

const Title = styled.h2`
  margin: 12px 0px;
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

const Description = styled.p`
  width: 55%;
  @media ${device.mobileS} {
    width: 100%;
    text-align: left;
  }
  @media ${device.tablet} {
    width: 40%;
    text-align: center;
  }
`;

export default Info;

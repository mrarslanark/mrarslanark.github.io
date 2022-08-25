import styled from "styled-components";

const Info = () => {
  return (
    <Section>
      <ProfilePicture src="/images/pp.jpg" alt="Profile" />
      <Title>ABOUT ME</Title>
      <Description>
        A software developer from Pakistan. I love to develop products and talk
        about tech. I've spoken on different topics like Cloud Services, Version
        Control, Mobile Development, Frontend Development and more. My core
        expertise include MERN Stack, Hybrid/Native Mobile Development and
        DevOps.
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
`;

const Title = styled.h2`
  margin: 12px 0px;
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  align-self: center;
`;

const Description = styled.p`
  width: 55%;
  text-align: center;
`;

export default Info;

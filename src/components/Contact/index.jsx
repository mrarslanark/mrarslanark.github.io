import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiInstagramLine,
} from "react-icons/ri";
import { FaHackerrank } from "react-icons/fa";
import styled, { css } from "styled-components";
import { device } from "../../constants/theme";

const Contact = () => {
  return (
    <Section id="connect">
      <h1>Connect with me</h1>
      <IconContainer className="social-icon-container">
        <LinkItem to={"https://www.facebook.com/devmrark"}>
          <Facebook />
        </LinkItem>
        <LinkItem to={"https://www.instagram.com/devmrark"}>
          <Instagram />
        </LinkItem>
        <LinkItem to={"https://twitter.com/mrarslanark"}>
          <Twitter />
        </LinkItem>
        <LinkItem to={"https://linkedin.com/in/mrarslanark"}>
          <LinkedIn />
        </LinkItem>
        <LinkItem to={"https://github.com/mrarslanark"}>
          <GitHub />
        </LinkItem>
        <LinkItem to={"https://www.hackerrank.com/mrarslanark"}>
          <HackerRank />
        </LinkItem>
      </IconContainer>
    </Section>
  );
};

const LinkItem = ({ to, children }) => {
  return (
    <a href={to} target={"_blank"} rel={"noreferrer"}>
      {children}
    </a>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
`;

const IconContainer = styled.div`
  margin: 36px 0px;
  display: flex;
  justify-content: space-evenly;
  @media ${device.mobileS} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 600px;
  }
`;

const iconColor = css`
  color: ${({ theme }) => theme.icon_color};
  font-size: 5rem;
  transition-property: color;
  transition-duration: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.icon_color_hover};
  }
  @media ${device.mobileS} {
    font-size: 2rem;
  }
  animation: float 5s ease-in-out infinite;
`;

const Facebook = styled(RiFacebookFill)`
  ${iconColor}
`;

const Twitter = styled(RiTwitterFill)`
  ${iconColor}
  animation-delay: 1s;
`;

const LinkedIn = styled(RiLinkedinFill)`
  ${iconColor}
  animation-delay: 2s;
`;

const GitHub = styled(RiGithubFill)`
  ${iconColor}
`;

const Instagram = styled(RiInstagramLine)`
  ${iconColor}
`;

const HackerRank = styled(FaHackerrank)`
  ${iconColor}
`;

export default Contact;

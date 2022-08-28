import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";
import styled, { css } from "styled-components";
import { device } from "../../constants/theme";

const Contact = () => {
  return (
    <Section>
      <h1>Connect with me</h1>
      <IconContainer className="social-icon-container">
        <a
          href={"https://www.facebook.com/devmrark"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <Facebook />
        </a>
        <a
          href={"https://twitter.com/mrarslanark"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <Twitter />
        </a>
        <a
          href={"https://linkedin.com/in/mrarslanark"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <LinkedIn />
        </a>
        <a
          href={"https://github.com/mrarslanark"}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <GitHub />
        </a>
      </IconContainer>
    </Section>
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
`;

const Facebook = styled(RiFacebookFill)`
  ${iconColor}
`;

const Twitter = styled(RiTwitterFill)`
  ${iconColor}
`;

const LinkedIn = styled(RiLinkedinFill)`
  ${iconColor}
`;

const GitHub = styled(RiGithubFill)`
  ${iconColor}
`;

export default Contact;

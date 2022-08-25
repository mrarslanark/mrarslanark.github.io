import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGithubFill,
} from "react-icons/ri";
import styled, { css } from "styled-components";

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
  width: 600px;
  display: flex;
  justify-content: space-evenly;
`;

const iconColor = css`
  color: ${({ theme }) => theme.icon_color};
  font-size: 5rem;
  transition-property: color;
  transition-duration: 0.3s;
  &:hover {
    color: ${({ theme }) => theme.icon_color_hover};
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

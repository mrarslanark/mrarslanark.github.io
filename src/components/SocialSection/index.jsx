import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGithubFill,
} from "react-icons/ri";
import "./styles.css";

const SocialSection = () => {
  return (
    <div className={"social-container"}>
      <a
        href={"https://www.facebook.com/devmrark"}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <RiFacebookFill className={"social-icon"} />
      </a>
      <a
        href={"https://twitter.com/mrarslanark"}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <RiTwitterFill className={"social-icon"} />
      </a>
      <a
        href={"https://linkedin.com/in/mrarslanark"}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <RiLinkedinFill className={"social-icon"} />
      </a>
      <a
        href={"https://github.com/mrarslanark"}
        target={"_blank"}
        rel={"noreferrer"}
      >
        <RiGithubFill className={"social-icon"} />
      </a>
    </div>
  );
};

export default SocialSection;

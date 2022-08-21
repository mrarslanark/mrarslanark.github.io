import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGithubFill,
} from "react-icons/ri";
import "./styles.css";

const Contact = () => {
  return (
    <section className={"social-container"}>
      <h1>Connect with me</h1>
      <div className="social-icon-container">
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
    </section>
  );
};

export default Contact;

import {
  FaApple,
  FaFacebookSquare,
  FaFigma,
  FaGithub,
  FaGlobe,
  FaGooglePlay,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaHackerrank,
  FaLinkedin,
  FaAndroid,
} from "react-icons/fa";
import { TbBrandMeta } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import styles from "@/styles/IconGenerator.module.css";
import classNames from "classnames";

type IconGeneratorProps = {
  id: string;
  size?: "small" | "medium" | "large";
};

const IconGenerator: React.FC<IconGeneratorProps> = ({
  id,
  size = "medium",
}) => {
  const style = classNames(styles.icon, styles[size]);

  switch (id) {
    case "google":
      return <FaGooglePlay className={style} />;
    case "youtube":
      return <FaYoutube className={style} />;
    case "ios":
      return <FaApple className={style} />;
    case "figma":
      return <FaFigma className={style} />;
    case "facebook":
      return <FaFacebookSquare className={style} />;
    case "twitter":
      return <FaTwitter className={style} />;
    case "instagram":
      return <FaInstagram className={style} />;
    case "website":
      return <FaGlobe className={style} />;
    case "mail":
      return <MdEmail className={style} />;
    case "github":
      return <FaGithub className={style} />;
    case "meta":
      return <TbBrandMeta className={style} />;
    case "hackerrank":
      return <FaHackerrank className={style} />;
    case "hackerrank":
      return <FaHackerrank className={style} />;
    case "linkedin":
      return <FaLinkedin className={style} />;
    case "android":
      return <FaAndroid className={style} />;
    default:
      return null;
  }
};

export default IconGenerator;

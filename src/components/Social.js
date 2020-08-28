import React from "react";
import { HiMail } from "react-icons/hi";
import {
  IoMdGlobe,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io";

const Social = ({ social }) => {
  console.log(social);
  return (
    <section id="social">
      <div className="jumbotron jumbotron-fluid mt-0">
        <div className="container mt-0">
          <h1 className="display-4">
            Connect with me{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <br />
          <a href={social.email} rel="noopener noreferrer" target="_blank">
            <HiMail className="mr-2" size={36} color="black" />
          </a>
          <a
            href={social.website_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoMdGlobe className="mr-2" size={36} color="grey" />
          </a>
          <a href={social.github_url} rel="noopener noreferrer" target="_blank">
            <IoLogoGithub className="mr-2" size={36} color="#212121" />
          </a>
          <a
            href={social.twitter_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoTwitter className="mr-2" size={36} color="#00acee" />
          </a>
          <a
            href={social.linkedin_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoLinkedin className="mr-2" size={36} color="#0e76a8" />
          </a>
          <a
            href={social.instagram_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoInstagram className="mr-2" size={36} color="#3f729b" />
          </a>
          <a
            href={social.facebook_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoFacebook className="mr-2" size={36} color="#3b5998" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Social;

import React from "react";
import "../css/Grid.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { IoMdGlobe } from "react-icons/io";

const Design = ({ design }) => {
  console.log(design);
  return (
    <section id="design">
      <div className="container">
        <h2 className="font-weight-light">Designs</h2>
        <div className="grid-container">
          {design.map((item) => (
            <div key={item.id} className="card d-flex border-light text-dark">
              <div className="shadow-sm">
                <img className="card-img-top" src={item.content} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{item.company}</h5>
                  <p className="card-text">{item.details}</p>
                </div>
                {item.facebook_url ||
                item.instagram_url ||
                item.twitter_url ||
                item.gitHub_url ||
                item.linkedIn_url ||
                item.website_url ? (
                  <div className="card-footer d-flex">
                    {item.facebook_url && (
                      <a
                        href={item.facebook_url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="card-link mt-auto "
                      >
                        <AiFillFacebook size={22} color="#3b5998" />
                      </a>
                    )}
                    {item.instagram_url && (
                      <a
                        href={item.instagram_url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="card-link mt-auto "
                      >
                        <AiFillInstagram size={22} color="#3f729b" />
                      </a>
                    )}
                    {item.twitter_url && (
                      <a
                        href={item.twitter_url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="card-link mt-auto "
                      >
                        <AiOutlineTwitter size={22} color="#00acee" />
                      </a>
                    )}
                    {item.gitHub_url && (
                      <a
                        href={item.gitHub_url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="card-link mt-auto "
                      >
                        <AiFillGithub size={22} color="#4078c0" />
                      </a>
                    )}
                    {item.linkedIn_url && (
                      <a
                        href={item.linkedIn_url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="card-link mt-auto "
                      >
                        <AiFillLinkedin size={22} color="#0e76a8" />
                      </a>
                    )}
                    {item.website_url && (
                      <a
                        href={item.website_url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="card-link mt-auto "
                      >
                        <IoMdGlobe size={22} color="gray" />
                      </a>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Design;

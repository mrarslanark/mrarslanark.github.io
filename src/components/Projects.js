import React from "react";
import "../css/Grid.css";
import { GoMarkGithub } from "react-icons/go";
import { FaGooglePlay } from "react-icons/fa";

const Projects = ({ projects }) => {
  return (
    <section id="project">
      <div className="container">
        <h2 className="font-weight-light">Projects</h2>
        <div className="grid-container">
          {projects.map((item) => (
            <div key={item.id} className="card d-flex border-light text-dark">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle text-muted">
                  {item.platform.join(", ")}
                </h6>
                {item.tech_stack.map((item, i) => (
                  <span key={i} className="badge badge-secondary my-2 mx-1">
                    {item}
                  </span>
                ))}
                <p className="card-text">{item.details}</p>
              </div>
              {item.github_repo || item.playstore_link ? (
                <div className="card-footer d-flex">
                  {item.github_repo && (
                    <a
                      href={item.github_repo}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="card-link mt-auto "
                    >
                      <GoMarkGithub color="black" size="22px" />
                    </a>
                  )}

                  {item.playstore_link && (
                    <a
                      href={item.playstore_link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="card-link mt-auto"
                    >
                      <FaGooglePlay color="#82B723" size="22px" />
                    </a>
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

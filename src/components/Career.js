import React from "react";
import "../css/Grid.css";

const Career = ({ career }) => {
  return (
    <section id="career">
      <div className="container">
        <h2 className="font-weight-light">Career Development</h2>
        <div className="grid-container">
          {career.map((item) => (
            <div key={item.id} className="card border-light text-dark bg-light">
              <div className="card-body">
                <h5 className="card-title">{item.as}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {item.origaniser} ({item.type})
                </h6>
                <p className="card-text">{item.topic}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    Resource
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;

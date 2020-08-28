import React from "react";
import { GrDocumentPdf } from "react-icons/gr";
import "../css/Intro.css";

const Intro = () => {
  return (
    <section>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <img
                style={{ borderRadius: "100%" }}
                src="./profilepic.webp"
                className="img-fluid"
                width={200}
                alt=""
              />
            </div>
            <div className="col-md-10">
              <h1 className="display-4 mb-0">Arslan Mushtaq</h1>
              <p className="lead mt-0">
                Mobile, Web Developer &amp; Graphic Designer
              </p>
              <div className="d-flex">
                <a
                  className="resume"
                  href="./resume.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <GrDocumentPdf size={24} style={{ marginRight: 6 }} />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

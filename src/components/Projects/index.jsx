import Lottie from "lottie-react";
import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import loading from "../../assets/animations/loading.json";
import "./styles.css";

const Projects = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div className="projects-section-loading">
        <Lottie
          animationData={loading}
          loop={true}
          autoPlay={true}
          className="loading-animation"
        />
      </div>
    );
  }

  return (
    <section>
      <h1>Projects</h1>
      <div className="projects">
        <ScrollMenu Footer={Footer} scrollContainerClassName="projects-scroll">
          {projects.map((item) => {
            return <ProjectItem key={item.id} item={item} />;
          })}
        </ScrollMenu>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <div className="projects-footer">
      <LeftArrow />
      <RightArrow />
    </div>
  );
};

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return isFirstItemVisible ? (
    <div />
  ) : (
    <div onClick={() => scrollPrev()} className="projects-footer-container ">
      <BsArrowLeftShort color="#ffffff" size={"2em"} />
      <p>Prev</p>
    </div>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return isLastItemVisible ? (
    <div />
  ) : (
    <div onClick={() => scrollNext()} className="projects-footer-container ">
      <p>Next</p>
      <BsArrowRightShort color="#ffffff" size={"2em"} />
    </div>
  );
};

const ProjectItem = ({ item }) => {
  return (
    <div className="item-project-container">
      <div className="item-project-title-subtitle">
        <div className="item-project-title-container">
          <h2 className="item-project-title">{item.title}</h2>
          <div className="item-project-links-section">
            {item.links.map((link) => {
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img
                    src={`/icons/${link.id}.png`}
                    alt={link.id}
                    className="item-project-icon"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <p
          className={`${
            item.tbp
              ? "item-project-release-date-tbp"
              : item.status === "dead"
              ? "item-project-release-date-dead"
              : ""
          } item-project-release-date`}
        >
          {item.tbp
            ? "To be published on"
            : item.status === "dead"
            ? "Removed on "
            : "Publised on"}{" "}
          {item.publishedOn}
        </p>
        <div className="item-project-technologies">
          <p className="item-project-technology">{item.builtOn.join(" | ")}</p>
        </div>
      </div>
      <p className="item-project-description">{item.description}</p>
    </div>
  );
};

export default Projects;

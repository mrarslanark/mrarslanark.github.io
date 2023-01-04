import HorizonSliderSection from "../HorizontalSliderSection";
import { IoMdClose } from "react-icons/io";

import loading from "../../assets/animations/loading.json";
import ProjectItem from "../ProjectItem";
import { useState } from "react";
import Modal from "react-modal";
import styled, { useTheme } from "styled-components";
import moment from "moment/moment";
import { formatTimestamp } from "../../constants/utils";

Modal.setAppElement("#root");

const Projects = ({ projects }) => {
  const theme = useTheme();
  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function toggleModal(item) {
    setSelectedItem(item);
    setModalVisibility((prevState) => !prevState);
  }

  return (
    <>
      <HorizonSliderSection
        data={projects}
        emptyListAnimation={loading}
        subtitle={"Loading Arslan's Projects"}
        title={"Projects"}
        sectionId={"projects"}
      >
        {projects.map((project) => (
          <ProjectItem
            item={project}
            onClickItem={(item) => toggleModal(project)}
            key={project.id}
          />
        ))}
      </HorizonSliderSection>
      <Modal
        isOpen={modalVisibility}
        onRequestClose={() => toggleModal(null)}
        // style={{
        //   content: {
        //     top: "50%",
        //     left: "50%",
        //     right: "auto",
        //     bottom: "auto",
        //     marginRight: "-50%",
        //     transform: "translate(-50%, -50%)",
        //     backgroundColor: theme.body,
        //     border: "none",
        //     width: "60%",
        //     height: "70%",
        //     display: "flex",
        //     flexDirection: "column",
        //     padding: "16px 24px",
        //   },
        //   overlay: {
        //     zIndex: 9999,
        //     backgroundColor: theme.modal_overlay,
        //   },
        // }}
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedItem && (
          <div>
            <Header>
              <h1>{selectedItem.title}</h1>
              <CloseIcon onClick={() => toggleModal(null)}>
                <IoMdClose size={24} color={theme.icon_color} />
              </CloseIcon>
            </Header>
            <LinkContainer>
              {selectedItem.links &&
                selectedItem.links.map((link, index) => {
                  return (
                    <Link
                      target={"_blank"}
                      href={link.url}
                      rel="noreferrer"
                      key={link.id}
                    >
                      <LinkText>{link.title}</LinkText> &nbsp;
                    </Link>
                  );
                })}
            </LinkContainer>
            <Description>{selectedItem.description}</Description>
            <VersionSectionTitle>Versions</VersionSectionTitle>
            {selectedItem.release.production ? (
              <Versioning
                version={selectedItem.release.production}
                release_date={selectedItem.release.production_date}
                tech_stack={selectedItem.production_stack}
                released={true}
                showTimeLeft={false}
              />
            ) : null}
            <hr />
            {selectedItem.release.development ? (
              <Versioning
                version={selectedItem.release.development}
                release_date={selectedItem.release.development_date}
                tech_stack={selectedItem.development_stack}
                released={false}
                showTimeLeft={true}
              />
            ) : null}
          </div>
        )}
      </Modal>
    </>
  );
};

const Versioning = ({
  version,
  release_date,
  tech_stack,
  released,
  showTimeLeft,
}) => {
  return (
    <VersionContainer>
      <VersionText>
        {version} - {released ? "Released " : "Releases "}{" "}
        {formatTimestamp(release_date)}
        {showTimeLeft
          ? ` | Will be published ${moment(release_date).fromNow(false)}`
          : ""}
      </VersionText>
      <TechStackTitle>Tech Stack</TechStackTitle>
      <p>{tech_stack.join(", ")}</p>
    </VersionContainer>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Description = styled.p`
  margin-bottom: 12px;
`;

const VersionSectionTitle = styled.h3`
  font-weight: 500;
  padding-top 12px;
`;

const VersionContainer = styled.div`
  margin-bottom: 6px;
`;

const VersionText = styled.p`
  font-weight: 500;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 6px 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;

const LinkText = styled.span`
  text-decoration: underline;
`;

const TechStackTitle = styled.p`
  color: ${({ theme }) => theme.text_dimmed};
`;

export default Projects;

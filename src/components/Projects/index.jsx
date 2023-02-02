import styled from "styled-components";
import { formatTimestamp, joinToString } from "../../constants/utils";
import projects from "../../data/projects.json";

const Projects = ({ id }) => {
  const currentProject = projects[id];

  return (
    <section>
      <ContentContainer>
        <Heading>{currentProject.title}</Heading>
        <p>
          Upcoming project releasing on{" "}
          {formatTimestamp(currentProject.release)}
        </p>
        <Stack>Built with {joinToString(projects[id].stack)}</Stack>
        <Description>{currentProject.description}</Description>
      </ContentContainer>
    </section>
  );
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
`;

const Stack = styled.p`
  width: 60%;
  text-align: center;
`;

const Description = styled.p`
  margin-top: 12px;
  width: 70%;
  text-align: center;
`;

export default Projects;

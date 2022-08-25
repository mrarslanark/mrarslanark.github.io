import React from "react";
import styled from "styled-components";

const ProjectItem = ({ item }) => {
  return (
    <ItemContainer className="item-container">
      <ItemHeaderContainer>
        <ItemTopContainer>
          <ProjectTitle>{item.title}</ProjectTitle>
          <div>
            {item.links.map((link) => {
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Icon src={`/icons/${link.id}.png`} alt={link.id} />
                </a>
              );
            })}
          </div>
        </ItemTopContainer>
        <ReleaseDate tbp={item.tbp} status={item.status}>
          {item.tbp
            ? "To be published on"
            : item.status === "dead"
            ? "Removed on "
            : "Publised on"}{" "}
          {item.publishedOn}
        </ReleaseDate>
      </ItemHeaderContainer>
      <Description>{item.description}</Description>
      <TechContainer>
        <Technology>{item.builtOn.join(" | ")}</Technology>
      </TechContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  width: 450px;
  height: 460px;
  padding: 16px 24px;
`;

const ItemHeaderContainer = styled.div`
  margin: 12px 0px;
`;

const ItemTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProjectTitle = styled.h2`
  text-transform: uppercase;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  cursor: inherit;
`;

const ReleaseDate = styled.p`
  color: ${(props) => {
    if (props.tbp) {
      return props.theme.tbp;
    } else if (props.status === "dead") {
      return "rgb(206, 38, 38)";
    } else {
      return "color: rgb(100, 100, 100)";
    }
  }};
`;

const TechContainer = styled.div`
  display: flex;
  margin: 20px 0px 0px 0px;
  height: 50px;
`;

const Technology = styled.p`
  font-size: medium;
`;

const Description = styled.p`
  height: 250px;
`;

export default ProjectItem;

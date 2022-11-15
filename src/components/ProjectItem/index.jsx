import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../constants/theme";

const ProjectItem = ({ item }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <ItemContainer showMore={showMore} className="item-container">
      <div>
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
      </div>
      <LinkContainer>
        {item.links.map((link, index) => {
          return (
            <Link
              target={"_blank"}
              href={link.url}
              rel="noreferrer"
              key={link.id}
            >
              <LinkText>{link.title}</LinkText>{" "}
              {index === item.links.length - 1 ? null : (
                <>
                  <span> - &nbsp;</span>
                </>
              )}
            </Link>
          );
        })}
      </LinkContainer>
      <Description showMore={showMore}>{item.description}</Description>
      <ShowMore onClick={toggleShowMore}>
        {showMore ? "Show Less" : "Show More"}
      </ShowMore>
      <TechContainer>
        <Technology>{item.builtOn.join(" | ")}</Technology>
      </TechContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  padding: 16px 24px;
  @media ${device.mobileS} {
    width: 240px;
    height: ${({ showMore }) => (showMore ? "auto" : "360px")};
  }
  @media ${device.mobileM} {
    width: 280px;
  }
  @media ${device.mobileL} {
    width: 335px;
  }
  @media ${device.tablet} {
    width: 450px;
    height: ${({ showMore }) => (showMore ? "auto" : "310px")};
  }
`;

const ItemTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
`;

const ProjectTitle = styled.h2`
  text-transform: uppercase;
  align-self: center;
  @media ${device.mobileS} {
    font-size: medium;
  }
  @media ${device.tablet} {
    font-size: large;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: inherit;
  cursor: inherit;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.tablet} {
    display: inline-block;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 6px 0px;
  @media ${device.tablet} {
    display: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;

const LinkText = styled.span`
  text-decoration: underline;
`;

const TechContainer = styled.div`
  display: flex;
  margin: 20px 0px 0px 0px;
`;

const Technology = styled.p`
  font-size: medium;
`;

const Description = styled.p`
  overflow: ${({ showMore }) => (showMore ? "visible" : "hidden")};
  display: ${({ showMore }) => (showMore ? "block" : "-webkit-box")};
  -webkit-line-clamp: ${({ showMore }) => (showMore ? "none" : "4")};
  -webkit-box-orient: ${({ showMore }) => (showMore ? "none" : "vertical")};
  font-size: medium;
  height: ${({ showMore }) => (showMore ? "auto" : "100px")};
  @media ${device.mobileS} {
    height: auto;
  }
`;

const ShowMore = styled.p`
  font-size: medium;
  color: #1c6ff2;
  cursor: pointer;
`;

export default ProjectItem;

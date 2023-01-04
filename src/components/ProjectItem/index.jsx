import React from "react";
import styled from "styled-components";
import { device } from "../../constants/theme";
import { formatTimestamp } from "../../constants/utils";
import { BsArrowRightShort } from "react-icons/bs";

const ProjectItem = ({ item, onClickItem }) => {
  return (
    <ItemContainer className="item-container">
      <div>
        <ItemTopContainer>
          <ProjectTitle>
            {item.title}{" "}
            {item.release.production
              ? item.release.production
              : item.release.development}
          </ProjectTitle>
          <DetailsButton onClick={onClickItem}>
            Details <BsArrowRightShort size={24} />
          </DetailsButton>
        </ItemTopContainer>
        <ReleaseContainer>
          <ReleaseInfoText>
            {item.release.development} releases on{" "}
            {formatTimestamp(item.release.development_date)}
          </ReleaseInfoText>
        </ReleaseContainer>
      </div>
      <Description>{item.description}</Description>
      <LinkContainer>
        {item.links &&
          item.links.map((link, index) => {
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
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  padding: 16px 24px;
  height: 250px;
  display: flex;
  justify-content: space-around;
  @media ${device.mobileS} {
    width: 240px;
  }
  @media ${device.mobileM} {
    width: 280px;
  }
  @media ${device.mobileL} {
    width: 335px;
  }
  @media ${device.tablet} {
    width: 450px;
  }
`;

const ItemTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

const ReleaseContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ReleaseInfoText = styled.p`
  font-size: 0.9rem;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;

const LinkText = styled.span`
  text-decoration: underline;
`;

const Description = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: medium;
  height: 100px;
  @media ${device.mobileS} {
    height: auto;
  }
`;

const DetailsButton = styled.button`
  font-size: medium;
  color: #1c6ff2;
  cursor: pointer;
  background-color: transparent;
  width: fit-content;
  border: none;
  display: flex;
  margin: 0;
  color: ${({ theme }) => theme.text_dimmed};
  transition: color 0.15s ease;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

export default ProjectItem;

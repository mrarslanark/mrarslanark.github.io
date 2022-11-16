import { useState } from "react";
import styled from "styled-components";
import { device } from "../../constants/theme";

const AccomplishmentItem = ({ item }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <div>
      <Poster src={item.featuredImage} alt={"Poster"} />
      <ItemContainer showMore={showMore} className="item-container">
        <Title>{item.title}</Title>
        {item.topic && <Subtitle>{item.topic}</Subtitle>}
        <LinkContainer>
          {item.links &&
            item.links.map((link) => {
              return (
                <div
                  key={link}
                  dangerouslySetInnerHTML={{ __html: `${link}{\t}` }}
                />
              );
            })}
        </LinkContainer>
        <hr className="line-divider" />
        <Description
          showMore={showMore}
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
        <ShowMore onClick={toggleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </ShowMore>
      </ItemContainer>
    </div>
  );
};

export default AccomplishmentItem;

const Poster = styled.img`
  height: 200px;
  object-fit: cover;
  @media ${device.mobileS} {
    width: 270px;
  }
  @media ${device.mobileM} {
    width: 340px;
  }
  @media ${device.mobileL} {
    width: 380px;
  }
  @media ${device.tablet} {
    width: 400px;
  }
`;

const ItemContainer = styled.div`
  padding: 16px 24px;
  &:hover {
    background-color: ${({ theme }) => theme.item_container_bg_hover};
  }
  @media ${device.mobileS} {
    width: 270px;
    height: ${({ showMore }) => (showMore ? "auto" : "360px")};
  }
  @media ${device.mobileM} {
    width: 340px;
  }
  @media ${device.mobileL} {
    width: 380px;
  }
  @media ${device.tablet} {
    width: 400px;
    height: ${({ showMore }) => (showMore ? "auto" : "280px")};
  }
`;

const Title = styled.h3`
  margin: 0px 0px 6px 0px;
`;

const Subtitle = styled.p`
  margin: 0px 0px 6px 0px;
  font-weight: bold;
  font-size: medium;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
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

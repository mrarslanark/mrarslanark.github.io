import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BlogItem = ({ item }) => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(`/blog/${item.slug}`);
  };

  return (
    <Container onClick={onNavigate} className="item-container">
      <Poster src={item.featuredImage} alt={"Poster"} />
      <ContentContainer>
        <TopContainer>
          <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
          <ReleaseDate>
            {item.modified
              ? `Updated on ${moment(item.modified).format("llll")}`
              : `Published on ${moment(item.date).format("llll")}`}
          </ReleaseDate>
        </TopContainer>
        <Description dangerouslySetInnerHTML={{ __html: item.excerpt }} />
      </ContentContainer>
    </Container>
  );
};

export default BlogItem;

const Container = styled.div`
  width: 450px;
  cursor: pointer;
`;

const Poster = styled.img`
  height: 200px;
  width: inherit;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  padding: 16px;
`;

const TopContainer = styled.div`
  margin: 12px 0px;
`;

const ReleaseDate = styled.p`
  color: rgb(100, 100, 100);
`;

const Description = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

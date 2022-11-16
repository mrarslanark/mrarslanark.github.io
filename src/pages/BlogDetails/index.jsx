import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Layout from "../../components/Layout";
import PageLoader from "../../components/PageLoader";

const findPostBySlug = (id) => {
  return `${process.env.REACT_APP_BLOG_URL}/${id}`;
};

const setOGProperty = (property, value) => {
  document
    .querySelector(`meta[property="og:${property}"]`)
    .setAttribute("content", value);
};

const BlogDetails = () => {
  const { blogId } = useParams();
  const [data, setData] = useState(null);

  const fetchBlogDetails = async () => {
    try {
      if (!blogId) {
        throw new Error("Blog Unavailable");
      }

      const { data } = await axios.get(findPostBySlug(blogId));
      setOGProperty("title", data.title.rendered);
      setOGProperty("image", data.jetpack_featured_media_url);
      setOGProperty("image:alt", data.title.rendered);
      setOGProperty("image:width", "300");
      setOGProperty("image:height", "200");
      setOGProperty("image:alt", data.title.rendered);
      setOGProperty("description", data.excerpt.rendered);
      setOGProperty("url", `http://arslanmushtaq.com/blog/${blogId}`);
      setOGProperty("type", "article");
      setData({
        content: data.content.rendered,
        createdAt: data.date,
        excerpt: data.excerpt.rendered,
        id: data.id,
        slug: data.slug,
        title: data.title.rendered,
        modified: data.modified,
        featuredImage: data.jetpack_featured_media_url,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogDetails();
  }, []);

  if (!data) {
    return <PageLoader />;
  }

  return (
    <Layout showMenuItem={true} footer={false}>
      <Container>
        <ContentContainer className="blog-detail-content">
          <ContentHeader className="blog-detail-title-container">
            <h1 dangerouslySetInnerHTML={{ __html: data.title }} />
            <ReleaseDate>
              {data.modified
                ? `Updated on ${moment(data.modified).format("llll")}`
                : `Published on ${moment(data.date).format("llll")}`}
            </ReleaseDate>
          </ContentHeader>
          <br />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </ContentContainer>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 24px 0px;
`;

const ContentContainer = styled.div`
  width: 90%;
`;

const ContentHeader = styled.div`
  margin: 12px 0px;
`;

const ReleaseDate = styled.p`
  font-size: medium;
  color: rgb(100, 100, 100);
`;

export default BlogDetails;

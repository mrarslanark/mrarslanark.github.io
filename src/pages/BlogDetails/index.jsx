import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Layout from "../../components/Layout";
import PageLoader from "../../components/PageLoader";

const findPostBySlug = (id) => {
  return `${process.env.REACT_APP_BLOG_URL}/${id}`;
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
      <HeadTags data={data} id={blogId} />
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

const HeadTags = ({ data, id }) => {
  return (
    <Helmet>
      <meta property="og:title" content={data.title} />
      <meta property="og:image" content={data.featuredImage} />
      <meta property="og:image:alt" content={data.title} />
      <meta property="og:description" content={data.excerpt} />
      <meta property="og:url" content={`http://arslanmushtaq.com/blog/${id}`} />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="200" />
      <meta property="og:type" content="article" />
    </Helmet>
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

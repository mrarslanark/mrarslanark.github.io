import moment from "moment";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Layout from "../../components/Layout";
import PageLoader from "../../components/PageLoader";
import articles from "../../data/articles.json";

const BlogDetails = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = articles.find((ar) => ar.slug === slug);
    if (fetchArticle) {
      setArticle(fetchArticle);
    }
  }, [slug]);

  if (!article) {
    return <PageLoader />;
  }

  return (
    <>
      <Helmet>
        <meta property="og:title" content={article.title} />
        <meta property="og:image" content={article.featuredImage} />
        <meta property="og:image:alt" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        {/* <meta
          property="og:url"
          content={`https://arslanmushtaq.com/blog/${article.slug}`}
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="200" />
        <meta property="og:type" content="article" /> */}
      </Helmet>
      <Layout menu={"blog"} footer={false}>
        <Container>
          <ContentContainer className="blog-detail-content">
            <ContentHeader className="blog-detail-title-container">
              <h1 dangerouslySetInnerHTML={{ __html: article.title }} />
              <ReleaseDate>
                {article.modified
                  ? `Updated on ${moment(article.modified).format("llll")}`
                  : `Published on ${moment(article.date).format("llll")}`}
              </ReleaseDate>
            </ContentHeader>
            <br />
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </ContentContainer>
        </Container>
      </Layout>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 60px 0;
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

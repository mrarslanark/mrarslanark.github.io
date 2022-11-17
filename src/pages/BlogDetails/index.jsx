import moment from "moment";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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
    <div>
      <HeadTags
        excerpt={article.excerpt}
        image={article.featuredImage}
        title={article.title}
        id={article.slug}
      />
      <Layout showMenuItem={true} footer={false}>
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
    </div>
  );
};

const HeadTags = ({ title, image, excerpt, id }) => {
  return (
    <Helmet async={true}>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:description" content={excerpt} />
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

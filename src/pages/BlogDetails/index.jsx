import moment from "moment";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Layout from "../../components/Layout";
import PageLoader from "../../components/PageLoader";

const BlogDetails = () => {
  const { state } = useLocation();

  if (!state) {
    return <PageLoader />;
  }

  return (
    <Layout showMenuItem={true} footer={false}>
      <HeadTags data={state} id={state.slug} />
      <Container>
        <ContentContainer className="blog-detail-content">
          <ContentHeader className="blog-detail-title-container">
            <h1 dangerouslySetInnerHTML={{ __html: state.title }} />
            <ReleaseDate>
              {state.modified
                ? `Updated on ${moment(state.modified).format("llll")}`
                : `Published on ${moment(state.date).format("llll")}`}
            </ReleaseDate>
          </ContentHeader>
          <br />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: state.content }}
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

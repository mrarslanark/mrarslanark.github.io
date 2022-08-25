import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

import { db } from "../../firebase";
import moment from "moment";
import PageLoader from "../../components/PageLoader";
import styled from "styled-components";

const BlogDetails = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  const fetchBlogDetails = async () => {
    try {
      if (!params.blogId) {
        throw new Error("Blog Id is unavailable");
      }
      const docRef = doc(db, "blogs", params.blogId);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        setData(docSnapshot.data());
      } else {
        throw new Error("Blog doesn't exists");
      }
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
    <Layout footer={false}>
      <Container>
        <Poster
          src={data.poster}
          alt={"poster"}
          className="blog-detail-poster"
        />
        <ContentContainer className="blog-detail-content">
          <ContentHeader className="blog-detail-title-container">
            <h1>{data.title}</h1>
            <ReleaseDate>
              Published on {moment(data.publishedOn.toDate()).format("llll")}
            </ReleaseDate>
          </ContentHeader>
          <p>{data.short_description}</p>
          <br />
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
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
  width: 60%;
`;

const ContentHeader = styled.div`
  margin: 12px 0px;
`;

const Poster = styled.img`
  width: 60%;
`;

const ReleaseDate = styled.p`
  font-size: medium;
  color: rgb(100, 100, 100);
`;

export default BlogDetails;

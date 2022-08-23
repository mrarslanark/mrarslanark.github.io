import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

import { db } from "../../firebase";
import loading from "../../assets/animations/loading.json";
import "./styles.css";
import moment from "moment";
import Lottie from "lottie-react";

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
    return (
      <Layout footer={false}>
        <div className="blog-detail-loading">
          <Lottie
            animationData={loading}
            loop={true}
            autoPlay={true}
            className="loading-animation"
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout footer={false}>
      <div className="blog-detail-container">
        <img src={data.poster} alt={"poster"} className="blog-detail-poster" />
        <div className="blog-detail-content">
          <div className="blog-detail-title-container">
            <h1>{data.title}</h1>
            <p className="blog-detail-release-date">
              Published on {moment(data.publishedOn.toDate()).format("llll")}
            </p>
          </div>
          <p>{data.short_description}</p>
          <br />
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetails;

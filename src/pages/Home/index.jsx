import Introduction from "../../components/Introduction";
import Layout from "../../components/Layout";
import Projects from "../../components/Projects";

import { Helmet } from "react-helmet-async";
import Accomplishments from "../../components/Accomplishments";
import Blogs from "../../components/Blog";
import Contact from "../../components/Contact";
import Skills from "../../components/Skills";

import axios from "axios";
import { useEffect, useState } from "react";
import accomplishments from "../../data/accomplishments.json";
import skills from "../../data/skills.json";

const Home = () => {
  const [blog, setBlogs] = useState(null);

  async function fetchBlogs() {
    const url = process.env.REACT_APP_BLOG_URL;
    try {
      const { data } = await axios.get(url);
      const articles = data.map((blog) => {
        return {
          content: blog.content.rendered,
          createdAt: blog.date,
          excerpt: blog.excerpt.rendered,
          id: blog.slug,
          slug: blog.slug,
          title: blog.title.rendered,
          modified: blog.modified,
          featuredImage: blog.jetpack_featured_media_url,
        };
      });
      setBlogs(articles);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Helmet>
        <meta property="og:title" content="Arslan Mushtaq" />
        <meta
          property="og:image"
          content={"https://arslanmushtaq.com/images/site_preview.jpeg"}
        />
        <meta property="og:image:alt" content="Welcome to my Website" />
        <meta property="og:description" content="Software Developer" />
        <meta property="og:url" content="https://arslanmushtaq.com" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Layout menu={"home"}>
        <Introduction />
        <Projects id={"loan-manager"} />
        <Skills skills={skills} />
        <Accomplishments accomplishments={accomplishments} />
        <Blogs blog={blog} />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;

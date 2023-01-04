import Introduction from "../../components/Introduction";
import Layout from "../../components/Layout";
import Projects from "../../components/Projects";

import { Helmet } from "react-helmet";
import Accomplishments from "../../components/Accomplishments";
import Blogs from "../../components/Blog";
import Contact from "../../components/Contact";
import Skills from "../../components/Skills";

import axios from "axios";
import { useEffect, useState } from "react";
import accomplishments from "../../data/accomplishments.json";
import projects from "../../data/projects.json";
import skills from "../../data/skills.json";
import styled from "styled-components";

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
    <div>
      <HeadTags />
      <Layout menu={"home"}>
        <Introduction />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Accomplishments accomplishments={accomplishments} />
        <Blogs blog={blog} />
        <Contact />
      </Layout>
    </div>
  );
};

const HeadTags = () => {
  return (
    <Helmet>
      <meta property="og:title" content="Arslan Mushtaq" />
      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/portfolio-mrarslanark-github.appspot.com/o/og_image.jpeg?alt=media&token=a4f4bb8b-32c5-47fa-afa5-eb400471b1f2"
      />
      <meta property="og:image:alt" content="Welcome to my Website" />
      <meta property="og:description" content="Software Developer" />
      <meta property="og:url" content="http://arslanmushtaq.com/" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default Home;

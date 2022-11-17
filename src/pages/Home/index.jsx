import Divider from "../../components/Divider";
import Info from "../../components/Info";
import Layout from "../../components/Layout";
import Projects from "../../components/Projects";

import { Helmet } from "react-helmet";
import Accomplishments from "../../components/Accomplishments";
import Blogs from "../../components/Blog";
import Contact from "../../components/Contact";
import Skills from "../../components/Skills";

import articles from "../../data/articles.json";
import skills from "../../data/skills.json";
import projects from "../../data/projects.json";
import accomplishments from "../../data/accomplishments.json";

const Home = () => {
  return (
    <div>
      <HeadTags />
      <Layout>
        <Info />
        <Divider />
        <Skills skills={skills} />
        <Divider />
        <Projects projects={projects} />
        <Divider />
        <Accomplishments accomplishments={accomplishments} />
        <Divider />
        <Blogs blogs={articles} />
        <Divider />
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

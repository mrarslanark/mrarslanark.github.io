import Divider from "../../components/Divider";
import Info from "../../components/Info";
import Layout from "../../components/Layout";
import Projects from "../../components/Projects";

import { useCallback, useState } from "react";
import { useEffect } from "react";
import Blogs from "../../components/Blog";
import Contact from "../../components/Contact";
import Skills from "../../components/Skills";
import { fetchCollection } from "../../services/firebase";
import PageLoader from "../../components/PageLoader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [skills, setSkills] = useState([]);

  const getData = useCallback(async () => {
    try {
      const fetchedSkills = await fetchCollection("skills");
      const fetchedProjects = await fetchCollection("projects");
      const fetchedBlogs = await fetchCollection("blogs");
      setSkills(fetchedSkills);
      setProjects(fetchedProjects);
      setBlogs(fetchedBlogs);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Layout>
      <Info />
      <Divider />
      <Skills skills={skills} />
      <Divider />
      <Projects projects={projects} />
      <Divider />
      <Blogs blogs={blogs} />
      <Divider />
      <Contact />
    </Layout>
  );
};

export default Home;

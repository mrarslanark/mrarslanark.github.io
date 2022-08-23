import Divider from "../../components/Divider";
import Info from "../../components/Info";
import Layout from "../../components/Layout";
import Projects from "../../components/Projects";

import { useState } from "react";
import { useEffect } from "react";
import Blogs from "../../components/Blog";
import Contact from "../../components/Contact";
import Skills from "../../components/Skills";
import { fetchCollection } from "../../services/firebase";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [skills, setSkills] = useState([]);

  const getProjects = async () => {
    try {
      const fetchedProjects = await fetchCollection("projects");
      setProjects(fetchedProjects);
    } catch (err) {
      console.log(err);
    }
  };

  const getBlogs = async () => {
    try {
      const fetchedBlogs = await fetchCollection("blogs");
      setBlogs(fetchedBlogs);
    } catch (err) {
      console.log(err);
    }
  };

  const getSkills = async () => {
    try {
      const fetchedSkills = await fetchCollection("skills");
      setSkills(fetchedSkills);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSkills();
    getProjects();
    getBlogs();
  }, []);

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

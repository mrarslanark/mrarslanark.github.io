import Divider from "../../components/Divider";
import Info from "../../components/Info";
import Layout from "../../components/Layout";
import Projects from "../../components/Projects";

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import Blogs from "../../components/Blog";
import Contact from "../../components/Contact";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const data = [];
      for (const doc of querySnapshot.docs) {
        data.push(doc.data());
      }
      setProjects(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const data = [];
      for (const doc of querySnapshot.docs) {
        data.push(doc.data());
      }
      setBlogs(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchBlogs();
  }, []);

  return (
    <Layout>
      <Info />
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

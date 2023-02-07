import Container from "@/components/Container";
import Head from "next/head";
import styles from "@/styles/AllProjects.module.css";
import React from "react";
import data from "@/constants/projects.json";
import Divider from "@/components/Divider";
import ProjectItem from "@/components/Projects/ProjectItem";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Arslan Mushtaq</title>
      </Head>
      <Container menu="blog">
        <div className={styles.container}>
          <div>
            <h1>Projects</h1>
            <p>
              My past projects include innovative solutions for a wide range of
              industries, such as FinTech, MedTech, EduTech, SaaS, and more.
              Additionally, I have a number of exciting projects in the
              pipeline, set to release soon, that demonstrate my commitment to
              staying ahead of the curve and delivering the best possible
              experience for my users.
            </p>
          </div>
          <Divider direction="horizontal" />
          <div className={styles.projectList}>
            {data.map((project) => {
              return (
                <ProjectItem fullWidth={true} key={project.id} {...project} />
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Projects;

import Container from "@/components/Container";
import Divider from "@/components/Divider";
import SkillItem from "@/components/Skills/SkillItem";
import data from "@/constants/skills.json";
import styles from "@/styles/AllSkills.module.css";
import Head from "next/head";
import React from "react";

const Skills = () => {
  return (
    <>
      <Head>
        <title>Skills | Arslan Mushtaq</title>
      </Head>
      <Container menu="blog">
        <div className={styles.container}>
          <div>
            <h1>Skills</h1>
            <p>
              With a strong foundation in React.js and React Native for
              front-end development and experience in Node.js and databases such
              as MongoDB, Firebase Firestore, and PostgreSQL, I am equipped to
              tackle projects from start to finish. I am constantly seeking to
              expand my knowledge and stay up-to-date with the latest
              technologies and trends in the industry.
            </p>
          </div>
          <Divider direction="horizontal" />
          <div className={styles.projectList}>
            {data.map((skill) => {
              return <SkillItem fullWidth={true} key={skill.id} {...skill} />;
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Skills;

import CertificationItem from "@/components/CertificationsList/CertificationItem";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import data from "@/constants/certifications.json";
import styles from "@/styles/AllCertifications.module.css";
import Head from "next/head";
import React from "react";

const Certifications = () => {
  return (
    <>
      <Head>
        <title>Certifications | Arslan Mushtaq</title>
      </Head>
      <Container menu="blog">
        <div className={styles.container}>
          <div>
            <h1>Certifications</h1>
            <p>
              Certifications have helped me validate my technical skills as they
              demonstrate to employers that I have a certain level of expertise
              and knowledge in a specific technology or field. They can help me
              move up the career ladder by opening up new job opportunities and
              providing me with more credibility in my field. It also helps me
              stay stay up-to-date with the latest technologies and best
              practices.
            </p>
          </div>
          <Divider direction="horizontal" />
          <div className={styles.projectList}>
            {data.map((skill) => {
              return (
                <CertificationItem fullWidth={true} key={skill.id} {...skill} />
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Certifications;

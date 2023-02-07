import CareerDevelopmentItem from "@/components/CareerDevelopment/CareerDevelopmentItem";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import data from "@/constants/career_development.json";
import styles from "@/styles/AllCareerDevelopment.module.css";
import Head from "next/head";
import React from "react";

const CareerDevelopment = () => {
  return (
    <>
      <Head>
        <title>Career Development | Arslan Mushtaq</title>
      </Head>
      <Container menu="blog">
        <div className={styles.container}>
          <div>
            <h1>Career Development</h1>
            <p>
              Career development allows me of acquiring knowledge, skills, and
              experience that can help you grow and advance in your chosen
              field. This can involve taking courses and training programs,
              seeking mentorship and guidance, networking with others in the
              industry, and actively seeking out new opportunities for growth
              and advancement. A well-planned and executed career development
              plan can help you reach your long-term goals, enhance your earning
              potential, and lead to greater job satisfaction and fulfillment.
            </p>
          </div>
          <Divider direction="horizontal" />
          <div className={styles.projectList}>
            {data.map((skill) => {
              return (
                <CareerDevelopmentItem
                  fullWidth={true}
                  key={skill.id}
                  {...skill}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default CareerDevelopment;

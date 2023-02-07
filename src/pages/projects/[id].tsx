import Container from "@/components/Container";
import Divider from "@/components/Divider";
import ProjectConnect from "@/components/ProjectConnect";
import ProjectFunctionalities from "@/components/ProjectFunctionalities";
import ProjectInfo from "@/components/ProjectInfo";
import ProjectPlatforms from "@/components/ProjectPlatforms";
import ProjectTechnologies from "@/components/ProjectTechnologies";
import projects from "@/constants/projects.json";
import styles from "@/styles/ProjectDetails.module.css";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const currentProject = projects.find((project) => project.id === id);

  if (!currentProject) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{currentProject.title} | Projects | Arslan Mushtaq</title>
      </Head>
      <Container menu="blog">
        <div className={styles.container}>
          <div className={styles.infoContainer}>
            <Image
              src={`/images/projects/${currentProject.icon}`}
              alt={currentProject.title}
              width={150}
              height={150}
            />
            <div>
              <h1>{currentProject.title}</h1>
              <p>{currentProject.description}</p>
            </div>
          </div>
          <h1>Releases</h1>
          <div className={styles.contentContainer}>
            <div className={styles.releaseDetailContainer}>
              <Tabs>
                <TabList className={styles.tabList}>
                  {currentProject.releases.map((release) => {
                    return (
                      <Tab
                        selectedClassName={styles.selectedTab}
                        key={release.id}
                      >
                        v{release.version}
                      </Tab>
                    );
                  })}
                </TabList>
                {currentProject.releases.map((release) => {
                  return (
                    <TabPanel key={release.id}>
                      <div>
                        <ProjectInfo
                          version={release.version}
                          date={release.date}
                          status={release.status}
                        />
                        <Divider direction="horizontal" />
                        <ProjectFunctionalities
                          functionality={release.functionality}
                        />
                        <Divider direction="horizontal" />
                        <ProjectTechnologies stack={release.stack} />
                        <Divider direction="horizontal" />
                        <ProjectPlatforms links={release.links} />
                      </div>
                    </TabPanel>
                  );
                })}
              </Tabs>
            </div>
            {currentProject.social.length > 0 && (
              <>
                <Divider direction="vertical" />
                <ProjectConnect project={currentProject} />
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProjectDetails;

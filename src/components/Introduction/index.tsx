import Image from "next/image";
import styles from "@/styles/Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.intro}>
      <Image
        width={140}
        height={140}
        src={"/images/pp.jpg"}
        alt={"Profile Picture"}
      />
      <div>
        <h2>Arslan Mushtaq</h2>
        <p>
          As a software developer with 4 years of experience, I have a diverse
          set of skills and have worked on a variety of projects in different
          domains including EdTech, FinTech, MedTech, E-Commerce, P2P
          Marketplaces, and B2B Solutions. This broad range of experience has
          given me the ability to adapt to new environments and technologies,
          making me a valuable asset to any development team.
        </p>
      </div>
    </div>
  );
};

export default Introduction;

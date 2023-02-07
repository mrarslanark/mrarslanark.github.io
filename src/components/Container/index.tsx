import styles from "@/styles/Container.module.css";
import React, { PropsWithChildren } from "react";
import Footer from "../Footer";
import Header from "../Header";

type ContainerType = {
  showHeader?: boolean;
  showFooter?: boolean;
  menu: "home" | "blog";
};

const Container: React.FC<PropsWithChildren<ContainerType>> = ({
  showHeader = true,
  showFooter = true,
  menu,
  children,
}) => {
  return (
    <main className={styles.container}>
      {showHeader ? <Header menu={menu} /> : null}
      {children}
      {showFooter ? <Footer /> : null}
    </main>
  );
};

export default Container;

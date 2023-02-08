import menuItems from "@/constants/menu.json";
import Link from "next/link";
import React from "react";
import social from "@/constants/social.json";
import IconGenerator from "../IconGenerator";
import styles from "@/styles/Header.module.css";

type HeaderType = {
  menu: "home" | "blog";
};

const Header: React.FC<HeaderType> = ({ menu }) => {
  return (
    <nav>
      <ul>
        {menuItems[menu].map((mItem) => {
          return (
            <Link target={mItem.target} key={mItem.id} href={mItem.to}>
              {mItem.title}
            </Link>
          );
        })}
      </ul>
      <div className={styles.socialContainer}>
        {social.map((item) => {
          return (
            <Link
              className={styles.socialItemContainer}
              key={item.id}
              href={item.url}
              target={"_blank"}
            >
              <IconGenerator size="small" id={item.id} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;

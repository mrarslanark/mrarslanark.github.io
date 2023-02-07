import menuItems from "@/constants/menu.json";
import Link from "next/link";
import React from "react";

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
    </nav>
  );
};

export default Header;

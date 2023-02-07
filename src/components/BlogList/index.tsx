import styles from "@/styles/Slider.module.css";
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import Section from "../Section";
import SliderFooter from "../Section/SliderFooter";
import BlogListItem, { PostType } from "./BlogListItem";

type BlogListProps = {
  data: PostType[];
};

const BlogList: React.FC<BlogListProps> = ({ data }) => {
  return (
    <Section
      seeAllURL="/blog"
      title={"Blog"}
      sectionId={"blog"}
      showSeeAll={true}
    >
      <ScrollMenu
        Footer={SliderFooter}
        scrollContainerClassName={styles.slider}
        itemClassName={styles.item}
      >
        {data.map((item) => {
          return <BlogListItem key={item.id} {...item} />;
        })}
      </ScrollMenu>
    </Section>
  );
};

export default BlogList;

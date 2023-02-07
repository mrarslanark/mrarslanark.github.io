import { formatTimestamp } from "@/constants/utils";
import styles from "@/styles/BlogListItem.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type PostType = {
  content: string;
  createdAt: string;
  excerpt: string;
  id: string;
  slug: string;
  title: string;
  modified: string;
  featuredImage: string;
};

const BlogListItem: React.FC<PostType> = ({
  featuredImage,
  title,
  modified,
  excerpt,
  createdAt,
  slug,
}) => {
  return (
    <Link href={`/posts/${slug}`}>
      <div className={styles.container}>
        <Image
          className={styles.featuredImage}
          src={featuredImage}
          alt={"Poster"}
          width={450}
          height={200}
        />
        <div className={styles.contentContainer}>
          <div className={styles.topContainer}>
            <h3 dangerouslySetInnerHTML={{ __html: title }} />
            <p>
              {modified
                ? `Updated on ${formatTimestamp(modified)}`
                : `Created on ${formatTimestamp(createdAt)}`}
            </p>
          </div>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </div>
    </Link>
  );
};

export default BlogListItem;

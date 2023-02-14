import { PostType } from "../BlogList/BlogListItem";
import styles from "@/styles/MoreItem.module.css";
import Link from "next/link";
import Image from "next/image";

const MoreItem: React.FC<PostType> = ({
  slug,
  featuredImage,
  title,
  excerpt,
}) => {
  return (
    <Link href={`/blog/posts/${slug}`}>
      <div className={styles.moreItemContainer}>
        <Image
          src={featuredImage}
          width={50}
          height={50}
          alt={title}
          className={styles.featuredImage}
        />
        <div className={styles.textContainer}>
          <h3 dangerouslySetInnerHTML={{ __html: title }} />
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
      </div>
    </Link>
  );
};

export default MoreItem;

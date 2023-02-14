import Container from "@/components/Container";
import { getPosts } from "@/services/posts";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "@/styles/BlogPage.module.css";
import BlogListItem, { PostType } from "@/components/BlogList/BlogListItem";
import Link from "next/link";

type BlogPageProps = {
  data: PostType[];
};

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  const [posts, setPosts] = useState<PostType[]>(data);

  if (!data) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Blog | Arslan Mushtaq</title>
      </Head>
      <Container showHeader={true} showFooter={true} menu="blog">
        <div className={styles.container}>
          <h1>Welcome to the Blog</h1>
          <FirstPost
            title={posts[0].title}
            excerpt={posts[0].excerpt}
            featuredImage={posts[0].featuredImage}
            slug={posts[0].slug}
          />
          <div className={styles.postListContainer}>
            {posts.slice(1, posts.length).map((post) => (
              <BlogListItem fullWidth={true} key={String(post.id)} {...post} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

type FirstPostProps = {
  title: string;
  excerpt: string;
  featuredImage: string;
  slug: string;
};

const FirstPost: React.FC<FirstPostProps> = ({
  title,
  excerpt,
  featuredImage,
  slug,
}) => {
  return (
    <Link href={`/blog/posts/${slug}`}>
      <div className={styles.firstContainer}>
        <Image src={featuredImage} width={400} height={200} alt={title} />
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
          <p>Read More...</p>
        </div>
      </div>
    </Link>
  );
};

export async function getStaticProps() {
  const result = await getPosts();
  return {
    props: {
      data: result,
    },
  };
}

export default BlogPage;

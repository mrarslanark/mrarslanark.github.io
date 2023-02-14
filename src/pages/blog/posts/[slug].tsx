import { PostType } from "@/components/BlogList/BlogListItem";
import Container from "@/components/Container";
import Head from "next/head";
import React from "react";
import styles from "@/styles/BlogDetails.module.css";
import { formatTimestamp } from "@/constants/utils";
import Image from "next/image";
import Divider from "@/components/Divider";
import Link from "next/link";
import MoreItem from "@/components/MoreItem";
import { getPosts, getSinglePost, getSlugs } from "@/services/posts";

type BlogDetailsProps = {
  post: PostType;
  posts: PostType[];
};

const BlogDetails: React.FC<BlogDetailsProps> = ({ post, posts }) => {
  if (!post) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{post.title} | Arslan Mushtaq | Software Engineer</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:image:alt" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:url"
          content={`http://arslanmushtaq.com/posts/${post.slug}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="article" />
      </Head>
      <Container menu="blog">
        <div className={styles.root}>
          <div className={styles.container}>
            <div>
              <div className={styles.headerContainer}>
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                <p>
                  {post.modified
                    ? `Updated on ${formatTimestamp(post.modified)}`
                    : `Created on ${formatTimestamp(post.createdAt)}`}
                </p>
              </div>
              <br />
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
          <Divider direction="vertical" />
          <div className={styles.moreContainer}>
            <h3 className={styles.title}>Author</h3>
            <div className={styles.authorContainer}>
              <Image
                src={"/images/pp.jpg"}
                alt={"Arslan Mushtaq"}
                width={100}
                height={100}
              />
              <div>
                <h3>Arslan Mushtaq</h3>
                <p>A passionate Software Developer</p>
                <Link href={"mailto:arslanark@gmail.com"}>
                  arslanark@gmail.com
                </Link>
              </div>
            </div>
            <Divider direction="horizontal" />
            <h3 className={styles.title}>More Posts</h3>
            <div className={styles.moreListContainer}>
              {posts.map((postItem) => {
                if (postItem.slug === post.slug) {
                  return null;
                }

                return <MoreItem key={postItem.id} {...postItem} />;
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogDetails;

export async function getStaticPaths() {
  const paths = await getSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  // Fetch necessary data for the blog post using params.id
  const post = await getSinglePost(params.slug);
  const posts = await getPosts();

  return {
    props: {
      post: post,
      posts: posts,
    },
  };
}

import { PostType } from "@/components/BlogList/BlogListItem";
import Container from "@/components/Container";
import Head from "next/head";
import React from "react";
import styles from "@/styles/BlogDetails.module.css";
import { formatTimestamp } from "@/constants/utils";
import Image from "next/image";
import Divider from "@/components/Divider";
import Link from "next/link";

type BlogDetailsProps = {
  post: PostType;
  posts: PostType[];
};

const BlogDetails: React.FC<BlogDetailsProps> = ({ post, posts }) => {
  console.log(posts);

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
            <h2>More Posts</h2>
            <div className={styles.moreListContainer}>
              {posts.map((postItem) => {
                if (postItem.slug === post.slug) {
                  return null;
                }

                return (
                  <Link href={`/posts/${postItem.slug}`} key={postItem.id}>
                    <div className={styles.moreItemContainer}>
                      <Image
                        src={postItem.featuredImage}
                        width={75}
                        height={75}
                        alt={postItem.title}
                        className={styles.featuredImage}
                      />
                      <div className={styles.textContainer}>
                        <h3
                          dangerouslySetInnerHTML={{ __html: postItem.title }}
                        />
                        <div
                          dangerouslySetInnerHTML={{ __html: postItem.excerpt }}
                        />
                      </div>
                    </div>
                  </Link>
                );
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
  const paths = await getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  // Fetch necessary data for the blog post using params.id
  const post = await getAPost(params.slug);
  const posts = await getPosts();

  return {
    props: {
      post: post ?? null,
      posts: posts ?? [],
    },
  };
}

export async function getAPost(slug: string) {
  const url = `${process.env.NEXT_WP_API_BLOG}?slug=${slug}`;
  const res = await fetch(url);
  const post = await res.json();
  const data = post.map((blog: any) => {
    return {
      content: blog.content.rendered,
      createdAt: blog.date,
      excerpt: blog.excerpt.rendered,
      id: blog.slug,
      slug: blog.slug,
      title: blog.title.rendered,
      modified: blog.modified,
      featuredImage: blog.jetpack_featured_media_url,
    };
  });
  if (data.length > 0) {
    return data[0];
  } else {
    return null;
  }
}

export async function getPosts() {
  const url = process.env.NEXT_WP_API_BLOG as string;
  const res = await fetch(url);
  const posts = await res.json();
  return posts.map((blog: any) => {
    return {
      content: blog.content.rendered,
      createdAt: blog.date,
      excerpt: blog.excerpt.rendered,
      id: blog.slug,
      slug: blog.slug,
      title: blog.title.rendered,
      modified: blog.modified,
      featuredImage: blog.jetpack_featured_media_url,
    };
  });
}

export async function getAllPostSlugs() {
  const url = process.env.NEXT_WP_API_BLOG as string;
  const res = await fetch(url);
  const posts = await res.json();
  return posts.map((blog: any) => {
    return {
      params: {
        slug: blog.slug,
      },
    };
  });
}

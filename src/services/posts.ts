export async function getPosts(page: number = 1) {
  const url = `${process.env.NEXT_WP_API_BLOG}?page=${page}`;
  const response = await fetch(url);
  if (!response.ok) {
    return [];
  }

  const posts = await response.json();
  return posts.map((blog: any) => {
    return {
      id: blog.slug,
      slug: blog.slug,
      createdAt: blog.date,
      modified: blog.modified,
      title: blog.title.rendered,
      excerpt: blog.excerpt.rendered,
      content: blog.content.rendered,
      featuredImage: blog.jetpack_featured_media_url,
    };
  });
}

export async function getSinglePost(slug: string) {
  const url = `${process.env.NEXT_WP_API_BLOG}?slug=${slug}`;
  const response = await fetch(url);
  if (!response.ok) {
    return null;
  }
  const post = await response.json();
  if (post.length === 0) {
    return null;
  }

  const data = post.map((blog: any) => {
    return {
      id: blog.slug,
      slug: blog.slug,
      createdAt: blog.date,
      modified: blog.modified,
      title: blog.title.rendered,
      content: blog.content.rendered,
      excerpt: blog.excerpt.rendered,
      featuredImage: blog.jetpack_featured_media_url,
    };
  });
  return data[0];
}

export async function getSlugs() {
  const url = process.env.NEXT_WP_API_BLOG as string;
  const response = await fetch(url);
  if (!response.ok) {
    return [];
  }
  const posts = await response.json();
  return posts.map((blog: any) => {
    return {
      params: {
        slug: blog.slug,
      },
    };
  });
}

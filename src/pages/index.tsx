import BlogList from "@/components/BlogList";
import CareerDevelopment from "@/components/CareerDevelopment";
import CertificationsList from "@/components/CertificationsList";
import Container from "@/components/Container";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import career_development from "@/constants/career_development.json";
import certifications from "@/constants/certifications.json";
import projects from "@/constants/projects.json";
import skills from "@/constants/skills.json";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

const Home = ({ posts }: any) => {
  return (
    <>
      <Head>
        <title>Arslan Mushtaq | Software Engineer</title>
        <meta name="description" content="A Passionate Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Arslan Mushtaq" />
        <meta
          property="og:image"
          content="%PUBLIC_URL%/images/site_preview.jpeg"
        />
        <meta property="og:image:alt" content="Welcome to my Website" />
        <meta property="og:description" content="Software Developer" />
        <meta property="og:url" content="%PUBLIC_URL%" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />
      </Head>
      <Container menu={"home"}>
        <Introduction />
        <Projects data={projects} />
        <Skills data={skills} />
        <CareerDevelopment data={career_development} />
        <CertificationsList data={certifications} />
        <BlogList data={posts} />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const url = process.env.NEXT_WP_API_BLOG as string;
  const res = await fetch(url);
  if (!res.ok) {
    return {
      props: {
        posts: [],
      },
    };
  }
  const posts = await res.json();
  const data = posts.map((blog: any) => {
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

  return {
    props: {
      posts: data,
    },
  };
}

export default Home;

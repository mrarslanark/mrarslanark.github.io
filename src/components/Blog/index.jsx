import HorizonSliderSection from "../HorizontalSliderSection";

import cooking from "../../assets/animations/cooking.json";
import BlogItem from "../BlogItem";

const Blog = ({ blog }) => {
  return (
    <HorizonSliderSection
      data={blog}
      emptyListAnimation={cooking}
      subtitle={"Something is cooking..."}
      title={"Blog"}
      sectionId={"blog"}
    >
      {blog && blog.map((blog) => <BlogItem item={blog} key={blog.id} />)}
    </HorizonSliderSection>
  );
};

export default Blog;

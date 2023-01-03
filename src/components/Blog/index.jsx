import HorizonSliderSection from "../HorizontalSliderSection";

import cooking from "../../assets/animations/cooking.json";
import BlogItem from "../BlogItem";
import Loading from "../Loading";

const Blog = ({ blog }) => {
  if (!blog) {
    <Loading />;
  }

  return (
    <HorizonSliderSection
      ListItem={BlogItem}
      data={blog}
      emptyListAnimation={cooking}
      subtitle={"Something is cooking..."}
      title={"Blog"}
      sectionId={"blog"}
    />
  );
};

export default Blog;

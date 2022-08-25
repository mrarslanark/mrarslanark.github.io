import HorizonSliderSection from "../HorizontalSliderSection";

import cooking from "../../assets/animations/cooking.json";
import BlogItem from "../BlogItem";

const Blog = ({ blogs }) => {
  return (
    <HorizonSliderSection
      ListItem={BlogItem}
      data={blogs}
      emptyListAnimation={cooking}
      subtitle={"Something is cooking..."}
      title={"Blog"}
    />
  );
};

export default Blog;

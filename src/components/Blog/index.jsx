import Lottie from "lottie-react";
import moment from "moment";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import { Link } from "react-router-dom";

import cooking from "../../assets/animations/cooking.json";
import SliderFooter from "../HorizontalSlider/SliderFooter";
import "./styles.css";

const Blogs = ({ blogs }) => {
  if (blogs.length === 0) {
    return (
      <section className="empty-section">
        <h1>Blogs</h1>
        <Lottie
          style={{ marginBlock: 24 }}
          animationData={cooking}
          loop={true}
          autoplay={true}
          className={"loading-animation"}
        />
        <p>Something is cooking...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Blogs</h1>
      <div className="blogs">
        <ScrollMenu
          Footer={SliderFooter}
          scrollContainerClassName="blogs-scroll"
        >
          {blogs.map((item) => {
            return <BlogItem key={item.id} item={item} />;
          })}
        </ScrollMenu>
      </div>
    </section>
  );
};

const BlogItem = ({ item }) => {
  return (
    <Link to={`/blog/${item.id}`} className="item-blog-container">
      <img className="item-blog-poster" src={item.poster} alt={"Poster"} />
      <div className="item-blog-content">
        <div className="item-blog-title-subtitle">
          <h2 className="item-blog-title">{item.title}</h2>
          <p className="item-blog-release-date">
            Published on {moment(item.publishedOn.toDate()).format("llll")}
          </p>
        </div>
        <p className="item-blog-description">{item.short_description}</p>
      </div>
    </Link>
  );
};

export default Blogs;

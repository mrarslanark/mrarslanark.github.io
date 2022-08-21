import moment from "moment";
import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import cooking from "../../assets/animations/cooking.json";
import "./styles.css";

const Blogs = ({ blogs }) => {
  if (blogs.length === 0) {
    return (
      <section className="empty-section">
        <h1>Blogs</h1>
        <Lottie
          style={{ marginBlock: 24 }}
          width={100}
          height={100}
          options={{
            animationData: cooking,
            loop: true,
            autoplay: true,
          }}
        />
        <p>Something is cooking...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Blogs</h1>
      <div className="blogs">
        <ScrollMenu Footer={Footer} scrollContainerClassName="blogs-scroll">
          {blogs.map((item) => {
            return <BlogItem key={item.id} item={item} />;
          })}
        </ScrollMenu>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <div className="blogs-footer">
      <LeftArrow />
      <RightArrow />
    </div>
  );
};

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return isFirstItemVisible ? (
    <div />
  ) : (
    <div onClick={() => scrollPrev()} className="blogs-footer-container">
      <BsArrowLeftShort color="#ffffff" size={"2em"} />
      <p>Prev</p>
    </div>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return isLastItemVisible ? (
    <div />
  ) : (
    <div onClick={() => scrollNext()} className="blogs-footer-container">
      <p>Next</p>
      <BsArrowRightShort color="#ffffff" size={"2em"} />
    </div>
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

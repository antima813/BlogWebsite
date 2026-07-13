import blogs from "../data/blog";
import BlogCard from "../components/BlogCard";

function Blogs() {
  return (
    <section className="blogs-page">
      <div className="container">

        <div className="section-title">
          <span>OUR BLOGS</span>
          <h2>Latest Articles</h2>
          <p>
            Read our latest stories on technology, travel,
            lifestyle and food.
          </p>
        </div>

        <div className="blogs-grid">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Blogs;
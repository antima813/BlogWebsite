import { useParams, Link } from "react-router-dom";
import blog from "../data/blog";

function BlogDetails() {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <div className="container" style={{ padding: "120px 0" }}>
        <h2>Blog Not Found</h2>
        <Link to="/blogs">← Back to Blogs</Link>
      </div>
    );
  }

  return (
    <section className="blog-details">
      <div className="container">

        <img
          src={blog.image}
          alt={blog.title}
          className="details-image"
        />

        <div className="details-content">

          <span className="details-category">
            {blog.category}
          </span>

          <h1>{blog.title}</h1>

          <div className="details-info">
            <span>👤 {blog.author}</span>
            <span>📅 {blog.date}</span>
          </div>

          <p>
            {blog.description}
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores omnis recusandae quidem, molestiae unde
            consequatur ipsa provident doloremque, consequuntur
            laboriosam saepe deserunt. Ipsum illum voluptatum
            repudiandae, consectetur dolorem rem ducimus.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque impedit quibusdam neque pariatur deleniti
            molestias quisquam, expedita autem sit facere.
          </p>

          <Link to="/blogs" className="back-btn">
            ← Back to Blogs
          </Link>

        </div>

      </div>
    </section>
  );
}

export default BlogDetails;
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="blog-card">

      <img
        src={blog.image}
        alt={blog.title}
        className="blog-image"
      />

      <div className="blog-content">

        <span className="blog-category">
          {blog.category}
        </span>

        <h3>{blog.title}</h3>

        <p>{blog.description}</p>

        <div className="blog-info">
          <span>{blog.author}</span>
          <span>{blog.date}</span>
        </div>

        <Link
          to={`/blog/${blog.id}`}
          className="read-btn"
        >
          Read More →
        </Link>

      </div>

    </div>
  );
}

export default BlogCard;
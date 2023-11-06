import { Link, Outlet } from "react-router-dom";
import Navigation from "../../components/Navbar/Navbar";
import "./Blog.css";
function Blog() {
  return (
    <>
      <Navigation />
      <h1 className="blog-header">Blogs</h1>
      <hr />
      <div className="blog-btn">
        <button >
          <Link className="link-style" to="/blog/tech-news">Tech news</Link>
        </button>
        <button >
          <Link className="link-style" to="fun">Fun</Link>
        </button>
      </div>
      <hr />
      <Outlet/>
    </>
  );
}
export default Blog;

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        {/* Logo */}
        <div className="logo">
          InkVerse
        </div>

        {/* Navigation */}
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
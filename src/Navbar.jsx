import { link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
        <h1 className="navbar-title">Nakumatt Electronics</h1>

        <div className="navbar-links"> 
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/admin">Admin Portal</Link>

        </div>
    </nav>
  );
}

export default Navbar;
import { Navlink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
        <h1 className="navbar-title">Nakumatt Electronics</h1>

        <div className="navbar-links"> 
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/admin">Admin Portal</NavLink>

        </div>
    </nav>
  );
}

export default Navbar;
// Navbar component for Nakumatt Electronics

import { useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Nakumatt Electronics</h1>

      <div className="navbar-links">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/shop")}>Shop</button>
        <button onClick={() => navigate("/admin")}>Admin Portal</button>
      </div>
    </nav>
  )
}

export default Navbar
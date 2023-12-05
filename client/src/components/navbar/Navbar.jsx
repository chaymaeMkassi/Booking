import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleClick = async (e) => {

    localStorage.removeItem("user");
    window.location.reload();
  }; 
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">ATT Booking</span>
        </Link>
        {user ? console.log() : (
          <div className="navItems">
            <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
              <button className="navButton">Register</button>
            </Link>
            
            <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
              <button className="navButton">Login</button>
            </Link>
            
          </div>
        )}
        {
          user ?  (
            <div className="navItems">
              <div>{user.username}</div>
              <button className="navButton" onClick={handleClick} >Log Out</button>
            </div>
          ) :  console.log()
        }
      </div>
    </div>
  );
};

export default Navbar;

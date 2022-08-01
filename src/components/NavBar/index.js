import { NavLink } from "react-router-dom";
import { SiHomeassistant } from "react-icons/si";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="navbar-logo-links">
      <div className="navbar-logo">
        <NavLink className="container-navbar" to="/">
          <h1 style={{ fontSize: "60px" }}>
            Real <SiHomeassistant style={{ color: "rgb(87, 113, 48)" }} />{" "}
            Estate
          </h1>
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink
          to="/"
          className="container-navbar"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/listings"
          className="container-navbar"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
        >
          <p>Listings</p>
        </NavLink>
        <NavLink
          to="/viewingschedule"
          className="container-navbar"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
        >
          <p>Viewing schedule</p>
        </NavLink>
        <NavLink
          to="/aboutus/:language"
          className="container-navbar"
          style={({ isActive }) =>
            isActive ? { fontWeight: "bold" } : undefined
          }
        >
          <p>About us</p>
        </NavLink>
      </div>
    </div>
  );
};

export { NavBar };

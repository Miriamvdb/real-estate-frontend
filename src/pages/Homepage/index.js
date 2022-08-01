// import { RiArrowDropRightLine } from "react-icons/ri";
// import { NavLink } from "react-router-dom";
import "./styles.css";

const Homepage = () => {
  return (
    <div className="container-homepage">
      <h1>Welcome to Real Estate</h1>
      <img
        src="https://www.elliman.com/localimagereader.ashx?imageurl=https%3A%2F%2Fstatic-ind-elliman-production.gtsstatic.net%2Fresources%2Fsiteresources%2Fmy%20folder%2Fservices%2Fpropertymanagement1.jpg&imagecache=true"
        alt="homepicture"
        style={{ width: "50%", marginBottom: "2rem" }}
      />
      {/* <div className="container-buttons-homepage">
        <div>
          <NavLink className="navlink-style" to="/">
            <button className="button-homepage">
              See listings <RiArrowDropRightLine className="icon-homepage" />
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink className="navlink-style" to="/">
            <button className="button-homepage">
              About us <RiArrowDropRightLine className="icon-homepage" />
            </button>
          </NavLink>
        </div>
      </div> */}
    </div>
  );
};

export { Homepage };

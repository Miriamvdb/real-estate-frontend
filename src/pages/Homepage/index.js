import { useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Homepage = () => {
  const [languages, setLanguages] = useState([
    "English",
    "Dutch",
    "German",
    "Spanish",
  ]);
  const [selectLanguage, setSelectLanguage] = useState("");

  return (
    <div className="container-homepage">
      <h1>Welcome to Real Estate</h1>
      <img
        src="https://www.elliman.com/localimagereader.ashx?imageurl=https%3A%2F%2Fstatic-ind-elliman-production.gtsstatic.net%2Fresources%2Fsiteresources%2Fmy%20folder%2Fservices%2Fpropertymanagement1.jpg&imagecache=true"
        alt="homepicture"
        style={{ width: "50%", marginBottom: "2rem" }}
      />
      <div className="container-buttons-homepage">
        <div>
          <NavLink className="navlink-style" to="/listings">
            <button className="button-homepage">
              See listings <RiArrowDropRightLine className="icon-homepage" />
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink className="navlink-style" to={`/aboutus/${languages}`}>
            <button className="button-homepage">
              About us <RiArrowDropRightLine className="icon-homepage" />
            </button>
          </NavLink>
        </div>
        <div>
          <form>
            <select
              value={selectLanguage}
              onChange={(event) => setSelectLanguage(event.target.value)}
            >
              {languages.map((language, index) => {
                return <option key={index}>{language}</option>;
              })}
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Homepage };

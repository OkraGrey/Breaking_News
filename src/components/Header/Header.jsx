import Element from "./Element";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const home = "HOME";
  const tech = "TECHNOLOGY";
  const search = "SEARCH";
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 768 ? setToggle(true) : setToggle(false);
    });
  }, [window.innerWidth]);
  console.log("Toggle", toggle);
  return (
    <nav className="w-full flex items-center justify-center max-md:flex-col max-md:bg-white">
      <div className="w-full max-md:flex justify-between ">
        <div className="max-md:h-12 h-8 max-md:w-8 w-8 rounded-md mx-4 max-md:ml-6 my-4 ">
          <a href="">
            <img src="/S.png" alt="" />
          </a>
        </div>

        <div
          onClick={handleToggle}
          className="hidden max-md:block max-md:h-12 h-8 w-8 rounded-md mx-4 max-md:mx-0 my-4 max-md:text-2xl text-gray-500"
        >
          <button>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* nav elements */}
      <div className="w-full transition-all ease-in-out duration-500">
        {toggle && (
          <ul
            className="flex flex-col md:flex-row justify-end mr-2  items-center text-xs text-gray-400/60
          max-md:flex-col max-md:items-start  h-auto max-md:h-auto  max-md:relative
          max-md:bg-white max-md:z-[1] static md:z-auto
          max-md:top-0 max-md:left-0 max-md:opacity-100
          "
          >
            <Link to={"/"}>
              <Element title={home} />
            </Link>
            <Link to={"/tech"}>
              <Element title={tech} />
            </Link>
            <Link to={"/search"}>
              <Element title={search} />
            </Link>
            <Link to={"/buisiness"}>
              <Element title="BUSINESS" />
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Header;

import Element from "./Element";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  const home = "HOME";
  const about = "ABOUT";
  return (
    <nav
      className="w-full flex items-center
      max-md:flex-col max-md:items-start  
      max-md:h-auto  max-md:absolute
      max-md:bg-white max-md:z-[1] max-md:border-2
      max-md:top-0 max-md:left-0 max-md:opacity-100
      max-md:transition-all max-md:ease-in-out max-md:duration-500
    "
    >
      <div
        className="max-md:h-12  h-8 w-8 rounded-md mx-4 mt-4 
      "
      >
        <a href="/">
          <img src="/S.png" alt="" />
        </a>
      </div>
      {/* nav elements */}
      <div className="w-full ">
        <ul
          className="flex flex-row justify-end mr-2  items-center text-xs text-gray-400/60
          max-md:flex-col max-md:items-start  h-auto
        "
        >
          <div className="text-lg text-black ">
            <a href="/">
              <FontAwesomeIcon icon={faBars} />
            </a>
          </div>
          <Element title={home} />
          <Element title={about} />
          <Element title={"CONTACT"} />
          <Element title={"BLOGS"} />
        </ul>
      </div>
    </nav>
  );
};
export default Header;

// <a
//             className=" hover:text-rose-400/100 hover:font-semibold  mr-5"
//             href="/"
//           >
//             <li>HOME</li>
//           </a>
//           <a
//             className=" hover:text-rose-400/100 hover:font-semibold mr-5"
//             href="/"
//           >
//             <li>ABOUT</li>
//           </a>
//           <a
//             className=" hover:text-rose-400/100 hover:font-semibold mr-5"
//             href="/"
//           >
//             <li>CONTACT</li>
//           </a>
//           <a
//             className=" hover:text-rose-400/100 hover:font-semibold mr-5"
//             href="/"
//           >
//             <li>OTHER</li>
//           </a>

import Element from "./Element";
const Header = () => {
  const home = "HOME";
  const about = "ABOUT";
  return (
    <nav className="w-full flex items-center">
      <div className="h-8 w-8 rounded-md mx-4 my-2">
        <a href="/">
          <img src="../public/S.png" alt="" />
        </a>
      </div>
      {/* nav elements */}
      <div className="w-full">
        <ul className="flex flex-row justify-end mr-2 h-12 items-center text-xs text-gray-400/60">
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

import PropTypes from "prop-types";
const Element = ({ title }) => {
  return (
    <div
      className="  h-full flex items-center md:mr-4 md:px-4 relative text-xs
      max-md:mr-0 max-md:mx-2 max-md:text-md max-md:w-20 
      max-md:p-2 max-md: max-md:justify-start 
    "
    >
      <a
        className="hover:text-rose-400/100 
            after:absolute after:bg-rose-500/100 after:h-0.5 after:w-0 after:left-0
            after:-bottom-1 hover:after:w-full after:my-2 after:duration-200 py-4"
        href="/"
      >
        <li className="">{title}</li>
      </a>
    </div>
  );
};

Element.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Element;

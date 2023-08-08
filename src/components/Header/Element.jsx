import PropTypes from "prop-types";
const Element = ({ title }) => {
  return (
    <div className=" h-full flex items-center mr-4 px-4 relative text-xs">
      <a
        className="hover:text-rose-400/100 
            after:absolute after:bg-rose-500/100 after:h-0.5 after:w-0 after:left-0
            after:-bottom-1 hover:after:w-full after:my-2 after:duration-200"
        href="/"
      >
        <li>{title}</li>
      </a>
    </div>
  );
};

Element.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Element;

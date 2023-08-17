const SearchForm = ({ search, setSearch, onSubmit }) => {
  return (
    <div className="container my-6">
      <form
        className="flex flex-col justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div
          className="flex justify-center items-center border-2 border-rose-400 
        rounded-xl  bg-rose-50 pr-3"
        >
          <input
            required
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Type here ..."
            className="flex-1 px-4 py-2 rounded-l-xl outline-none border-none shadow-rose-300/60  text-lg font-mono font-semibold h-14 bg-rose-50 ml-3 outline-1 focus:outline-red-400 mr-1
          "
          />
          <button
            type="submit"
            className="px-2 py-3 mb-3 mx-auto bg-rose-400/30 rounded-r-2xl w-1/4 mt-3 h-16 hover:bg-rose-400 transition-color duration-300 text-xl font-medium hover:border-rose-700 border-3"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
export default SearchForm;

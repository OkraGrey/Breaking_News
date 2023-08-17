const SearchForm = ({ search, setSearch, onSubmit }) => {
  return (
    <div className="container">
      <form
        className="flex flex-col justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          required
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          className="w-full px-4 py-2 rounded-lg outline-gray-700 outline outline-2 shadow-rose-300/60 shadow-md text-lg font-mono font-semibold
          "
        />
        <button
          type="submit"
          className="p-3 mx-auto bg-rose-400/30 rounded-2xl w-1/3 mt-3 hover:bg-rose-400 transition-color duration-300 text-xl font-medium"
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchForm;

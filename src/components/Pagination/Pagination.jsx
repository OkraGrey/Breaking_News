const Pagination = ({ totalNews, NewsPerPage, setCurrentPage }) => {
  console.log("Total news :", totalNews, "News per page", NewsPerPage);
  let pages = [];
  for (let i = 0; i < Math.ceil(totalNews / NewsPerPage); i++) {
    pages.push(i + 1);
  }

  return pages.map((page, index) => {
    return (
      <button
        onClick={() => setCurrentPage(page)}
        className="p-4 bg-rose-400/60 mx-4"
        key={index}
      >
        {page}
      </button>
    );
  });
};
export default Pagination;

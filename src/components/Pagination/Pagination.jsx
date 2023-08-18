import * as React from "react";

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
        className="px-4 py-2 mx- rounded-lg  border-rose-400/60 border-2 transition-all ease-out duration-150 hover:bg-rose-400 focus:bg-rose-400"
        key={index}
      >
        {page}
      </button>
    );
  });
};
export default Pagination;

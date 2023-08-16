import News from "../News/News";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { fetchNews } from "../../redux/features/newsSlice";
import { fetchNews } from "../../redux/features/newsSlice";
import Pagination from "../pagination/pagination";
const NewsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  const [currentPage, setCurrentPage] = useState(3);
  const [newsPerPage, setNewsPerPage] = useState(10);

  const lastNewsIndex = currentPage * newsPerPage;
  const firstNewsIndex = lastNewsIndex - newsPerPage;
  const articles = useSelector((store) => store.newsSlice.news.articles);

  console.log("articles ,", articles);

  const paginatedArticles = articles
    ? articles.slice(firstNewsIndex, lastNewsIndex)
    : [];
  const totalNews = articles ? articles.length : 0;
  // console.log("asfasfasfas", articles);
  return (
    <>
      <div className="mx-auto flex flex-wrap sm:justify-between justify-center flex-row sm:gap-x-6 m-2">
        {articles &&
          paginatedArticles.map((art, index) => (
            <News key={index} index={index} data={art} />
          ))}
        <div className="flex justify-center w-full mb-8">
          <Pagination
            className="border-8"
            totalNews={totalNews}
            NewsPerPage={newsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};
export default NewsContainer;

import PageTitle from "../components/PageTitle/PageTitle";
import NewsContainer from "../components/NewsContainer/NewsContainer";
import { useEffect } from "react";
import { fetchNews } from "../redux/features/newsSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  const articles = useSelector((store) => store.newsSlice.news.articles);

  return (
    <div className="w-full">
      <div className="md:w-11/12 xl:w-9/12 container mt-8 mx-auto">
        <PageTitle title={"Breaking News...!"} />
        <NewsContainer articles={articles} />
      </div>
    </div>
  );
};
export default Home;

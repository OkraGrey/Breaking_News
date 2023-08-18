import PageTitle from "../components/PageTitle/PageTitle";
import NewsContainer from "../components/NewsContainer/NewsContainer";
import { useEffect } from "react";
import { fetchBusinessNews } from "../redux/features/newsSlice";
import { useDispatch, useSelector } from "react-redux";

const Buisiness = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBusinessNews());
  }, []);
  const articles = useSelector((store) => store.newsSlice.news.articles);

  return (
    <div className="w-full">
      <div className="xl:w-9/12 container mt-8 mx-auto">
        <PageTitle title={"Checkout the Buisiness hits "} />
        <NewsContainer articles={articles} />
      </div>
    </div>
  );
};
export default Buisiness;

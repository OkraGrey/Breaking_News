import PageTitle from "../components/PageTitle/PageTitle";
import NewsContainer from "../components/NewsContainer/NewsContainer";
import { useEffect, useState } from "react";
import { searchArticles } from "../redux/features/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchForm from "../components/SearchForm/SearchForm";
import BeatLoader from "react-spinners/BeatLoader";
const Search = () => {
  const apikey = "9b1b1b48d26c4b7db81d0dd08785a1ff";
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);

  console.log(search);

  const onSubmit = () => {
    const address = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=${apikey}
    `;
    dispatch(searchArticles(address));
    setToggle(!toggle);
    setCount(1);
    setSearch("");
  };

  const loading = useSelector((store) => store.newsSlice.is_loading);
  const art = useSelector((store) => store.newsSlice.searchedNews);
  // const art = useSelector((store) => store.newsSlice.searchedNews[0].articles);
  // console.log("loading", loading);

  return (
    <div className="w-full">
      <div className="xl:w-9/12 container mt-8 mx-auto">
        <PageTitle title={"Search Your Favorite Article"} />

        <SearchForm search={search} setSearch={setSearch} onSubmit={onSubmit} />

        {count == 0 ? (
          ""
        ) : loading ? (
          <div className="w-full flex items-center justify-center mt-5">
            <BeatLoader
              className="mt-3"
              color={"#De0325"}
              // loading={loading}
              // cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <NewsContainer articles={art[0].articles} />
        )}

        {/* {count > 0 && loading == false ? (
          <NewsContainer articles={art[0].articles} />
        ) : (
          <h1></h1>
        )} */}
      </div>
    </div>
  );
};
export default Search;

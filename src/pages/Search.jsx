import PageTitle from "../components/PageTitle/PageTitle";
import NewsContainer from "../components/NewsContainer/NewsContainer";
import { useEffect, useState } from "react";
import { searchArticles } from "../redux/features/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchForm from "../components/SearchForm/SearchForm";

const Search = () => {
  const apikey = "9b1b1b48d26c4b7db81d0dd08785a1ff";
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);

  console.log(search);

  const onSubmit = () => {
    const address = `https://newsapi.org/v2/everything?q=${search}&from=2023-07-17&sortBy=publishedAt&apiKey=${apikey}
    `;
    dispatch(searchArticles(address));
    setToggle(!toggle);
  };

  const art = useSelector((store) => store.newsSlice.searchedNews[0].articles);

  console.log(art);

  return (
    <div className="w-full">
      <div className="xl:w-9/12 container mt-8 mx-auto">
        <PageTitle title={"Search Your Favorite Article"} />

        <SearchForm search={search} setSearch={setSearch} onSubmit={onSubmit} />

        <NewsContainer articles={art} />
      </div>
    </div>
  );
};
export default Search;

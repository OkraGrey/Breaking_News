import "./App.css";
import { useSelector } from "react-redux";
function App() {
  const news = useSelector((store) => store.newsSlice.news);
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {news.map((n) => {
          return <li key={n.id}>{n.title}</li>;
        })}
      </div>
    </>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/400.css";
import Header from "./components/Header/Header";
import NewsContainer from "./components/NewsContainer/NewsContainer";
import PageTitle from "./components/PageTitle/PageTitle";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tech from "./pages/Tech";
import Buisiness from "./pages/Buisiness";
import Search from "./pages/Search";
function App() {
  return (
    <div className="w-full">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/buisiness" element={<Buisiness />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

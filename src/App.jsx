import "./App.css";
import Header from "./components/Header/Header";
import NewsContainer from "./components/NewsContainer/NewsContainer";
import PageTitle from "./components/PageTitle/PageTitle";
function App() {
  return (
    <div className="w-full">
      <Header />
      <div className="xl:w-9/12 container mt-8 mx-auto">
        <PageTitle />
        <NewsContainer />
      </div>
    </div>
  );
}

export default App;

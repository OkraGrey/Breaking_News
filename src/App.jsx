import "./App.css";
import Header from "./components/Header/Header";
import Headline from "./components/Headline/Headline";
function App() {
  return (
    <div className="w-full">
      <Header />
      <div className="w-3/4 mt-8 mx-auto">
        <Headline />
        <div className="border-2">
          <h1>Main BODY HERE....</h1>
        </div>
        s
      </div>
    </div>
  );
}

export default App;

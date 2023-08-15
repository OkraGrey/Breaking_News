import News from "../News/News";
import Headline from "../Headline/Headline";
const NewsContainer = () => {
  return (
    <div className="flex flex-wrap sm:justify-between justify-center flex-row sm:gap-x-6 m-2">
      <Headline />
      <News />
      <News />
      <News />
      <News />
      <News />
      <News />
      <News />
      <News />
      <News />
    </div>
  );
};
export default NewsContainer;

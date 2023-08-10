import News from "../News/News";
import Headline from "../Headline/Headline";
const NewsContainer = () => {
  return (
    <div className="flex flex-wrap sm:justify-between justify-center flex-row gap-x-6">
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

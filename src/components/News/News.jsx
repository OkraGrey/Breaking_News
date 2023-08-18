import { useState } from "react";
import Headline from "../Headline/Headline";
import { useEffect } from "react";

const News = (props) => {
  // console.log(props);
  const [newsLoading, setNewsLoading] = useState(true);
  const dateObject = new Date(props.data.publishedAt);
  const formattedDate = dateObject.toISOString().split("T")[0];
  useEffect(() => {
    setTimeout(() => {
      setNewsLoading(false);
    }, 2000);
  }, []);
  return props.index == 0 ? (
    <Headline data={props.data} newsLoading={newsLoading} />
  ) : (
    <div
      className={`lg:mt-4 transition ease-in-out delay-50 duration-300 hover:-translate-y-1 hover:scale-105 mb-2`}
    >
      <a href={props.data.url} target="_blank" className="inline-block">
        <div
          className={`${
            newsLoading && "animate-pulse "
          } sm:w-72 md:w-90 lg:w-72 xl:w-76 desktop:w-80 `}
        >
          <div
            className={`overflow-hidden sm:h-60 h-72 md:h-72 sm-h-72 lg:h-44`}
          >
            {newsLoading ? (
              <div
                className={`${
                  newsLoading ? "rounded-lg w-full h-full  bg-slate-400" : ""
                }`}
              ></div>
            ) : (
              <img
                className="rounded-lg w-full h-full object-cover "
                src={props.data.urlToImage}
                alt=""
              />
            )}
          </div>

          <div className="text-gray-500/80 text-xs mt-2 mb-1">
            {newsLoading ? (
              <div className={`w-20 h-4 bg-slate-400 rounded-md`}></div>
            ) : (
              <p>{formattedDate}</p>
            )}
          </div>

          <div className="text-2xl pb-1 tracking-wide">
            {newsLoading ? (
              <>
                <div
                  className={`w-full h-9 mb-1 bg-slate-400 rounded-md`}
                ></div>
                <div
                  className={`phonemd: w-72 phonesm:w-80 sm:w-full h-12 bg-slate-400 phonelg:w-96 rounded-md`}
                ></div>
              </>
            ) : (
              <h1>{props.data.title}</h1>
            )}
          </div>

          <div className="text-xs text-gray-500 my-2">
            {newsLoading ? (
              <>
                <div
                  className={`w-full h-2 mb-1 bg-slate-400 rounded-md`}
                ></div>
                <div
                  className={`w-full h-2 mb-1 bg-slate-400 rounded-md`}
                ></div>
                <div
                  className={`w-full h-2 mb-1 bg-slate-400 rounded-md`}
                ></div>
              </>
            ) : (
              <p>{props.data.description}</p>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};
export default News;

// <img
//               className="rounded-lg w-full h-full"
//               src="https://s.yimg.com/uu/api/res/1.2/TOBVzXB9CqfFypYGUUhnEg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-08/6ebfcc70-366e-11ee-bfb1-b9372c4f414b.cf.jpg"
//               alt=""
//             />

// <div className="  lg:mt-4 transition ease-in-out delay-50 duration-300 hover:-translate-y-1 hover:scale-105 mb-2">
//       <a href="" className="inline-block">
// <div className=" mx-auto flex flex-col max-sm:w-10/12 sm:w-5/12 h-auto ">
//   <div>
//     <img
//       className="rounded-lg w-full h-full"
//       src="https://s.yimg.com/uu/api/res/1.2/TOBVzXB9CqfFypYGUUhnEg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-08/6ebfcc70-366e-11ee-bfb1-b9372c4f414b.cf.jpg"
//       alt=""
//     />
//   </div>

// <div className="text-gray-500/80 text-xs mt-2 mb-1">
//   <p>March 20,2020</p>
// </div>

// <div className="text-2xl pb-1 tracking-wide">
//   <h1>
//     Title for the card or the news is here it has to be a little long
//   </h1>
// </div>

// <div className="text-xs text-gray-500 my-2">
//   <p>
//     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
//     aspernatur apossimus id sapiente tempore repudiandae asperiores
//     iste ipsum dolorum?
//   </p>
// </div>
//         </div>
//       </a>
//     </div>

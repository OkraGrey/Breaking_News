const Headline = () => {
  return (
    <div
      className=" lg:w-full transition ease-in-out delay-50 duration-300 hover:-translate-y-1 hover:scale-105 lg:mb-16 md:w-90 sm:w-72 sm:h-auto h-auto mb-2
    "
    >
      <a href="/" className="inline lg:block">
        {/* Image for headline */}
        <div className="lg:flex lg:flex-row">
          <div className=" h-auto  lg:w-128 lg:h-80">
            <img
              className="h-full w-full rounded-lg "
              src="https://s.yimg.com/uu/api/res/1.2/TOBVzXB9CqfFypYGUUhnEg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-08/6ebfcc70-366e-11ee-bfb1-b9372c4f414b.cf.jpg"
            />
          </div>
          <div className=" h-auto flex-1 ">
            <div className="lg:container lg:px-6 lg:py-2">
              <div>
                <h3
                  className="text-xs text-gray-500/80
                 mt-2 mb-1"
                >
                  June 23, 2018
                </h3>
              </div>
              <div>
                <h1
                  className="xl:text-4xl lg:text-3xl lg:font-bold lg:tracking-wider lg:pr-6
                text-2xl pb-1 tracking-wide
                "
                >
                  News Title Should be containing 3 lines. Hence can be checked
                </h1>
              </div>
              <div>
                <p className="xl:text-sm text-xs  xl:mt-5 lg:mt-1 text-gray-500 my-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Explicabo molestiae quaerat ex? Quam illo impedit atque
                  officia illum, fugit soluta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
export default Headline;

const Headline = () => {
  return (
    <div className="w-full flex justify-between">
      {/* Image for headline */}
      <div className="bg-slate-500 h-72 w-6/12 ">
        <a href="/">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1636218685988-4f535e25fe74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1678&q=80"
          />
        </a>
      </div>
      <div className="bg-slate-200 h-auto flex-1 ml-4 ">Image</div>
    </div>
  );
};
export default Headline;

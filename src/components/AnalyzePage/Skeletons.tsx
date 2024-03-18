function Skeletons() {
  return (
    <article className="max-w-3xl m-auto w-full mt-10">
      <section className="w-full flex bg-gray-200 rounded-xl p-7 animate-pulse">
        <div className="w-20 h-20 bg-gray-300 rounded" />
        <header className="flex flex-col w-full text-start ml-6">
          <h3 className="w-full h-6 bg-gray-300 rounded"></h3>
          <h5 className="w-full h-full bg-gray-300 rounded mt-2"></h5>
        </header>
      </section>
      <section className="mt-10 flex animate-pulse h-36 gap-3">
        {[1, 2, 3].map((index) => (
          <span key={index} className="w-full bg-gray-200 rounded-xl"></span>
        ))}
      </section>
      <section className="mt-10">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="w-full h-60 bg-gray-200 mb-4 rounded-md p-4"
          >
            <div className="h-2/6">
              <header className="w-full h-7 bg-gray-300 rounded-md"></header>
              <hr className="w-full h-1 mt-3 bg-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col h-4/6 justify-between w-full bg-gray-300 rounded-md"></div>
          </div>
        ))}
      </section>
    </article>
  );
}

export default Skeletons;

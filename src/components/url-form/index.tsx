
export default function UrlForm() {
  return (
    <div className="flex mt-6 xl:mt-10 flex-col relative">
      <div className="bg-white w-full h-20"></div>
      <div className="bg-light-grey w-full h-20"></div>
      <div className="w-full max-xl:px-4 absolute top-0">
        <form className="bg-purple-bg max-w-[1110px] xl:mx-auto h-40 py-7 xl:py-14 px-8 xl:px-16 rounded-xl flex max-xl:flex-col max-xl:items-center gap-4 max-xl:gap-2">
          <input
            type="text"
            className="py-3.5 px-8 font-sans text-grey rounded-xl w-full flex-1"
          />
          <button
            type="submit"
            className="bg-cyan text-white py-3.5 px-8 rounded-xl font-sans font-bold max-xl:w-full"
          >
            Shorten it!
          </button>
        </form>
      </div>
    </div>
  );
}
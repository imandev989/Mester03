// in ghesmat marbot be 4 morba card ghesmat tozihat footer hast
const FooterOfferItem = (index, icon, title, subtitle) => {
  return (
    <>
      <div className=" flex flex-col justify-center text-center mx-4 my-2 bg-slate-200 p-4 rounded-lg gap-2">
        <div className="mx-auto">
          {" "}
          <span className="my-2 text-blue-400">{index.icon}</span>
        </div>
        <div className="mx-auto">
          <span className="text-sm">{index.title}</span>
        </div>

        <div className="hidden sm:block mx-auto">
          <p className="text-xs text-gray-400">{index.subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default FooterOfferItem;

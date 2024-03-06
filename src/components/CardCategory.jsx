import ButtonCircle from "./ButtonCircle";

function CardCategory(props) {
  const { bgColor, imgUrl, imgAlt, title, content } = props;
  return (
    <div
      className={`relative max-w-64 h-[304px] px-8 pt-8 pb-6 rounded-md bg-orange-200 ${bgColor} text-center transition-all duration-300 ease-in-out hover:cursor-pointer hover:h-[330px] group`}
    >
      <img src={imgUrl} alt={imgAlt} className="w-full h-44" />
      <h3 className="mt-2 text-2xl font-bold">{title}</h3>
      <p style={{ fontFamily: "Roboto" }} className="mt-2 text-slate-500">
        {content}
      </p>
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 hidden group-hover:block">
        <ButtonCircle bg="bg-[#3cb815]" bgHover="bg-[#3cb815]" />
      </span>
    </div>
  );
}

export default CardCategory;

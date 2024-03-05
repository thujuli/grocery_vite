import { MdArrowForward } from "react-icons/md";

function ButtonOvalImg(props) {
  const { children } = props;
  return (
    <button
      style={{ fontFamily: "Roboto" }}
      className="flex items-center gap-2 h-10 pl-6 py-1 pr-1 rounded-full bg-[#3cb815] text-white"
    >
      {children}
      <span className="h-8 w-8 p-2 border-none rounded-full bg-white text-black">
        <MdArrowForward />
      </span>
    </button>
  );
}

export default ButtonOvalImg;

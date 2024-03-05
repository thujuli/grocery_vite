import { MdArrowBack, MdArrowForward } from "react-icons/md";

function ButtonCircle(props) {
  const { bg, bgHover, direction } = props;

  return (
    <button
      className={`h-10 w-10 p-2 ${bg} border-none rounded-full hover:${bgHover} text-white `}
    >
      {direction === "left" ? (
        <MdArrowBack className="text-2xl" />
      ) : (
        <MdArrowForward className="text-2xl" />
      )}
    </button>
  );
}

export default ButtonCircle;

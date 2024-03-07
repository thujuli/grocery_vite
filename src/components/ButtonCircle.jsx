import { MdArrowBack, MdArrowForward } from "react-icons/md";

function ButtonCircle(props) {
  const { direction, id } = props;

  const bgColor = id === 'best-product' ? 'bg-white' : 'bg-[#3cb815]';
  const textColor = id === 'best-product' ? 'text-black' : 'text-white';

  return (
    <button
      className={`group h-10 w-10 p-2 border-none rounded-full ${bgColor} shadow-lg hover:bg-[#2e4859] active:bg-gray-300 ${textColor} transition-colors duration-300 ease-in-out`}
    >
      {direction === "left" ? (
        <MdArrowBack className={`text-2xl group-hover:text-white`} />
      ) : (
        <MdArrowForward className={`text-2xl group-hover:text-white`} />
      )}
    </button>
  );
}

export default ButtonCircle;

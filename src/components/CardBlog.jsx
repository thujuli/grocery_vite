import { IoPersonSharp } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function CardBlog(props) {
  const { imgUrl, imgAlt, author, datePost, title, totalComments } = props;

  const dateStr = datePost.toLocaleString("default", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  const totalCommStr = totalComments <= 9 ? `0${totalComments}` : totalComments;

  return (
    <div className="relative max-w-[400px] h-fit bg-transparent shadow-lg hover:cursor-pointer">
      <img
        src={imgUrl}
        alt={imgAlt}
        className="w-[420px] h-[260px] object-cover rounded-xl"
      />
      <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-11/12 p-6 rounded-lg bg-white shadow-lg">
        <span
          className="flex items-center text-gray-400 text-sm "
          style={{ fontFamily: "Roboto" }}
        >
          <IoPersonSharp className="mr-2 text-[#3cb815] text-base" /> By{" "}
          {author} ||{" "}
          <FaRegCalendar className="mx-2 text-[#3cb815] text-base" /> {dateStr}
        </span>
        <h2 className="mt-4 text-2xl font-bold leading-normal">{title}</h2>
        <hr className="border mt-4" />
        <div
          style={{ fontFamily: "Roboto" }}
          className="flex justify-between mt-4"
        >
          <button type="button" className="flex items-center font-medium">
            Read More <FaAngleRight className="text-[#3cb815]" />
          </button>
          <span className="flex items-center" style={{ fontFamily: "Roboto" }}>
            <FaComments className="mr-1 text-orange-600 text-base" />{" "}
            {totalCommStr}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;

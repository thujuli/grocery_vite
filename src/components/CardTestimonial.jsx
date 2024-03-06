import { TfiQuoteLeft } from "react-icons/tfi";
import { FaStar } from "react-icons/fa";

function CardTestimonial(props) {
  const {
    ratings,
    imgUrl,
    imgAlt,
    clientName,
    clientWork,
    clientPosition,
    children,
  } = props;

  return (
    <div className="relative max-w-[420px] px-8 py-6 bg-white shadow-2xl hover:cursor-pointer hover:top-11 ">
      <span className="text-3xl text-[#3cb815]">
        <TfiQuoteLeft />
      </span>
      <div className="flex gap-1 mt-2 text-lg text-yellow-400">
        {Array(Math.round(ratings))
          .fill(null)
          .map((val, idx) => (
            <span key={idx}>
              <FaStar />
            </span>
          ))}
      </div>
      <p className="mt-4 text-md" style={{ fontFamily: "Roboto" }}>
        &quot;{children}&quot;
      </p>
      <div className="flex items-center gap-6 mt-6">
        <div className="flex-0 w-16 h-16 rounded-full overflow-hidden">
          <img
            src={imgUrl}
            alt={imgAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3>{clientName}</h3>
          <span className="text-gray-500" style={{ fontFamily: "Roboto" }}>
            {clientPosition} at
          </span>
          <span
            className="text-gray-700 font-medium"
            style={{ fontFamily: "Roboto" }}
          >
            {" "}
            {clientWork}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardTestimonial;

import { IoBagCheckOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

function CardProduct(props) {
  const { imgUrl, ImgAlt, category, content, price, disc, unit, border } =
    props;
  const priceUSD = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div
      className={`relative max-w-80 p-6 rounded-xl bg-white ${
        border === true ? "border border-gray-300" : ""
      }`}
    >
      <span
        className="absolute inline-block left-0 py-1 px-4 bg-orange-500 text-white text-sm"
        style={{ fontFamily: "Roboto" }}
      >
        -{disc}%
      </span>
      <button className="absolute end-6 text-3xl text-gray-400 focus:text-red-500">
        <FaHeart />
      </button>
      <img src={imgUrl} alt={ImgAlt} className="max-w-48 h-48 mx-auto" />
      <h3 className="uppercase text-gray-600" style={{ fontFamily: "Roboto" }}>
        {category}
      </h3>
      <h2 className="mb-3 text-2xl font-bold">{content}</h2>
      <span className="text-orange-600 font-bold">{priceUSD}</span>
      <span className="text-xs">/{unit}</span>
      <div className="flex items-center justify-between mt-5">
        <div className="border rounded-md overflow-hidden">
          <div className="bg-gray-200 text-2xl">
            <button className="bg-white h-full w-8">-</button>
            <span className="inline-block px-3 text-sm align-middle">1</span>
            <button className="bg-white h-full w-8">+</button>
          </div>
        </div>
        <button className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#3cb815] text-white text-2xl ">
          <IoBagCheckOutline />
        </button>
      </div>
    </div>
  );
}

export default CardProduct;

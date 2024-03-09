import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdArrowForward } from "react-icons/md";
import Container from "./Container";
import logo from "../assets/img/logo-remove.png";

const Footer = () => {
  return (
    <footer className="mt-20 pt-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6 md:gap-y-0 pt-14 pb-36 px-4 md:px-20 bg-[#fdf5ec] rounded-2xl">
          <section className="flex flex-col justify-between">
            <img src={logo} alt="Logo" className="w-32 h-auto mb-4" />
            <p className="text-gray-600 mb-4" style={{ fontFamily: "Roboto" }}>
              GymVast, 18 East 50th Street, 4th Floor, New York, NY 10022
            </p>
            <div className="flex space-x-4">
              <a
                href="facebook-link"
                className="rounded-full bg-green-500 text-white hover:bg-white hover:text-green-500 p-2 transition-colors"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="twitter-link"
                className="rounded-full bg-green-500 text-white hover:bg-white hover:text-green-500 p-2 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="google-plus-link"
                className="rounded-full bg-green-500 text-white hover:bg-white hover:text-green-500 p-2 transition-colors"
              >
                <FaGooglePlusG className="text-xl" />
              </a>
              <a
                href="instagram-link"
                className="rounded-full bg-green-500 text-white hover:bg-white hover:text-green-500 p-2 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </section>
          <section>
            <h3 className="mb-2 pb-0 md:pb-2 text-xl font-bold ">Categories</h3>
            <ul className="text-gray-600">
              <li className="my-3" style={{ fontFamily: "Roboto" }}>
                Fruits & Vegetables
              </li>
              <li className="my-3" style={{ fontFamily: "Roboto" }}>
                Dairy Products
              </li>
              <li className="my-3" style={{ fontFamily: "Roboto" }}>
                Package Foods
              </li>
              <li className="my-3" style={{ fontFamily: "Roboto" }}>
                Beverage
              </li>
              <li className="my-3" style={{ fontFamily: "Roboto" }}>
                Beverage
              </li>
            </ul>
          </section>
          <section>
            <h3 className="mb-2 pb-0 md:pb-2 text-xl font-bold ">
              Useful Links
            </h3>
            <ul className="text-gray-600">
              <li className="my-3" style={{ fontFamily: "Roboto" }}>
                Payment & Tax
              </li>
              <li className="my-3" style={{ fontFamily: "Roboto" }}>
                Terms of Service
              </li>
              <li className="my-3" style={{ fontFamily: "Roboto" }}>
                My Account
              </li>
              <li className="my-3" style={{ fontFamily: "Roboto" }}>
                Return Policy
              </li>
              <li className="my-3" style={{ fontFamily: "Roboto" }}>
                Discount
              </li>
            </ul>
          </section>
          <section className="flex flex-col justify-between">
            <h3 className=" mb-2 pb-0 md:pb-2 text-xl font-bold">Newsletter</h3>
            <p className="text-gray-600 mb-4" style={{ fontFamily: "Roboto" }}>
              Get now free 20% discount for all products on your first order
            </p>
            <div className="relative flex items-center border-2 rounded">
              <MdEmail className="absolute left-0 ml-2 text-green-500" />
              <input
                type="email"
                placeholder="Your Email address..."
                className="flex-1 pl-10 py-2 rounded focus:outline-none"
                style={{ fontFamily: "Roboto" }}
              />
              <button
                type="submit"
                className="absolute mr-3 right-0 bg-transparent border-none"
                style={{ top: "50%", transform: "translateY(-50%)" }}
              >
                <MdArrowForward className="text-orange-500" />
              </button>
            </div>
            <div className="flex flex-col mt-4">
              <p
                className="my-1 text-gray-600"
                style={{ fontFamily: "Roboto" }}
              >
                T: +1-202-555-0184
              </p>
              <p
                className="my-1 text-gray-600"
                style={{ fontFamily: "Roboto" }}
              >
                E: hello@finsinstore.co.uk
              </p>
            </div>
          </section>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

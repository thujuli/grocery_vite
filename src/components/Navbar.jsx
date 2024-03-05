import React from "react";
import logo from "../assets/img/logo-remove.png";
import Container from "./Container";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div id="navbar" className="flex justify-between items-center">
      <Container className="flex items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-32 h-auto" />
          <span style={{ fontFamily: "Roboto" }}>Delivery to</span>
          <FaMapMarkerAlt className="ml-1" />
          <span style={{ fontFamily: "Roboto" }}>
            &nbsp; &nbsp;Indonesia, Surabaya
          </span>
        </div>
      </Container>
      <Container className="flex items-center">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="What are you looking for?"
            style={{
              width: "18rem",
              backgroundColor: "#F9F9F9",
              border: "1px solid black",
              padding: "10px",
              paddingLeft: "30px",
              marginRight: "10px",
            }}
            className="input"
          />
          <FaSearch className="text-gray-500" />
          <FaHeart className="text-gray-500 ml-2" />
          <FaShoppingCart className="text-gray-500 ml-2" />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

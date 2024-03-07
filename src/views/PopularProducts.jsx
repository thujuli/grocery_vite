import ButtonOval from "../components/ButtonOval";
import Container from "../components/Container";
import CardProduct from "../components/CardProduct";
import spices from "../assets/img/category-spice.png";
import fruit from "../assets/img/category-fruit.png";
import vegetable from "../assets/img/category-vegetable.png";
import drinks from "../assets/img/category-drink.png";
import nuts from "../assets/img/category-nut.png";
import fish from "../assets/img/category-fish.png";
import meat from "../assets/img/category-meat.png";
import tuna from "../assets/img/category-tuna.png";
import React, { useState } from "react";

function PopularProducts() {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const getButtonClass = (category) => {
    return `py-2 w-24 rounded-3xl font-normal align-middle  ${
      activeCategory === category
        ? "bg-[#2e4859] text-white"
        : "bg-[#f3f3f3] text-black"
    }`;
  };
  return (
    <section id="popular-products" className="bg-[#f3f3f3] py-24">
      <Container>
        <div className="mb-20 text-center">
          <div className="flex mb-7 justify-center">
            <h2 className="text-3xl font-bold text-black mb-3">Most Popular</h2>
            <h2 className="text-3xl font-bold text-[#3cb814] mb-3 ml-2">
              Product
            </h2>
          </div>
          <div className="flex justify-center text-xs gap-4">
            {["All", "Vegetables", "Meat", "Drinks"].map((category) => (
              <button
                key={category}
                className={getButtonClass(category)}
                onClick={() => handleCategoryClick(category)}
                style={{ fontFamily: "Roboto" }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-5 pb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardProduct
            imgUrl={spices}
            ImgAlt="Product Name"
            category="SPICE"
            content="Farm Fresh Organic Spice 500g"
            price={7.99}
            disc={25}
            unit="kg"
            border={true}
          ></CardProduct>
          <CardProduct
            imgUrl={fruit}
            ImgAlt="Product Name"
            category="Fruits"
            content="Farm Fresh Organic Fruites 250g"
            price={6.39}
            disc={25}
            unit="kg"
            border={true}
          ></CardProduct>
          <CardProduct
            imgUrl={vegetable}
            ImgAlt="Product Name"
            category="VEGETABLES"
            content="Farm Fresh Organic Veggies 300g"
            price={10.19}
            disc={25}
            unit="kg"
            border={true}
          ></CardProduct>
          <CardProduct
            imgUrl={drinks}
            ImgAlt="Product Name"
            category="Juice"
            content="FUll Fresh Organic Juice"
            price={8.0}
            disc={25}
            unit="kg"
            border={true}
          ></CardProduct>
        </div>
        <div className="mt-5 pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardProduct
            imgUrl={nuts}
            ImgAlt="Product Name"
            category="VEGETABLES"
            content="Farm Fresh Organic Veggies 250g"
            price={7.0}
            disc={25}
            unit="kg"
            border={true}
          ></CardProduct>
          <CardProduct
            imgUrl={fish}
            ImgAlt="Product Name"
            category="MEAT"
            content="Farm Fresh Organic Fish 400g"
            price={7.99}
            disc={25}
            unit="kg"
            border={true}
          ></CardProduct>
          <CardProduct
            imgUrl={meat}
            ImgAlt="Product Name"
            category="MEAT"
            content="Farm Fresh Organic Meat 500g"
            price={14.99}
            disc={25}
            unit="kg"
            border={true}
          ></CardProduct>
          <CardProduct
            imgUrl={tuna}
            ImgAlt="Product Name"
            category="MEAT"
            content="Farm Fresh Organic Fish 100g"
            price={4.99}
            disc={25}
            unit="kg"
            border={true}
          ></CardProduct>
        </div>
      </Container>
    </section>
  );
}

export default PopularProducts;

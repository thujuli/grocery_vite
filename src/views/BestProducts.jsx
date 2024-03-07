import Container from "../components/Container";
import CardProduct from "../components/CardProduct";
import nuts from "../assets/img/category-nut.png";
import fish from "../assets/img/category-fish.png";
import meat from "../assets/img/category-meat.png";
import tuna from "../assets/img/category-tuna.png";
import ButtonCircle from "../components/ButtonCircle";

function BestProducts() {
  return (
    <section id="best-products" className="my-8 py-8">
      <Container>
        <div className="flex justify-between items-center pb-16">
          <div className="w-1/2">
            <h4 className="mb-5 text-4xl font-bold leading-tight text-[#1a2428]">
              Best Selling Products
            </h4>
          </div>
          <div className="flex">
            <ButtonCircle id='best-product' direction='left' />
            <div className="w-2"></div>
            <ButtonCircle id='best-product' direction='right' />
          </div>
        </div>
        <div className="mb-3 pb-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center justify-content-center">
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

export default BestProducts;

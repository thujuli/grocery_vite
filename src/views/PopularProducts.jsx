import ButtonOval from "../components/ButtonOval";
import Container from "../components/Container";
import CardProduct from "../components/CardProduct";
import spices from "../assets/img/category-spice.png";

function PopularProducts() {
  return (
    <section id="popular-products" className="bg-gray-500 py-10">
        <Container>
          <div className="text-center mb-6">
            <div className="flex">
                <h2 className="text-3xl font-bold text-black mb-3">Most Popular</h2>
                <h2 className="text-3xl font-bold text-green-600 mb-3">Product</h2>
            </div>
            <div className="flex justify-center gap-4">
                <ButtonOval mode="dark">All</ButtonOval>
                <ButtonOval mode="dark">Vegetables</ButtonOval>
                <ButtonOval mode="dark">Meat</ButtonOval>
                <ButtonOval mode="dark">Drinks</ButtonOval>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <CardProduct imgUrl={spices} ImgAlt="Product Name" category="VEGETABLES" content="Farm Fresh Organic Veggies 250g" price={7.99} disc={25} unit="kg" border={true}></CardProduct>
            <CardProduct imgUrl={spices} ImgAlt="Product Name" category="VEGETABLES" content="Farm Fresh Organic Veggies 250g" price={7.99} disc={25} unit="kg" border={true}></CardProduct>
            <CardProduct imgUrl={spices} ImgAlt="Product Name" category="VEGETABLES" content="Farm Fresh Organic Veggies 250g" price={7.99} disc={25} unit="kg" border={true}></CardProduct>
            <CardProduct imgUrl={spices} ImgAlt="Product Name" category="VEGETABLES" content="Farm Fresh Organic Veggies 250g" price={7.99} disc={25} unit="kg" border={true}></CardProduct>
        
        </div>
        </Container>
    </section>
  )
}

export default PopularProducts
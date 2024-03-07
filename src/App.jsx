import "./App.css";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./views/About";
import BestProducts from "./views/BestProducts";
import Blogs from "./views/Blogs";
import Categories from "./views/Categories";
import Jumbotron from "./views/Jumbotron";
import PopularProducts from "./views/PopularProducts";
import Promo from "./views/Promo";
import Testimonial from "./views/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Categories />
      <Promo />
      <BestProducts />
      <Testimonial />
      <About />
      <PopularProducts />
      <Blogs />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;

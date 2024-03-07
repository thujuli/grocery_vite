import "./App.css";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Categories from "./views/Categories";
import Jumbotron from "./views/Jumbotron";
import PopularProducts from "./views/PopularProducts";
import Promo from "./views/Promo";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Categories />
      <Promo />
      <About />
      <PopularProducts />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;

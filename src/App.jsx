import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Categories from "./views/Categories";
import Jumbotron from "./views/Jumbotron";
import Promo from "./views/Promo";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Categories />
      <Promo />
      <About />
      <Footer />
    </>
  );
}

export default App;

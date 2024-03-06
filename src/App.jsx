import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Categories from "./views/Categories";
import Jumbotron from "./views/Jumbotron";
import Promo from "./views/Promo";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Categories />
      <Promo/>
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Categories from "./views/Categories";
import Jumbotron from "./views/Jumbotron";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Categories />
      <Footer />
    </>
  );
}

export default App;

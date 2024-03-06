import imgAbout from "../assets/img/about-img.png";
import ButtonOvalImg from "../components/ButtonOvalImg";
import Container from "../components/Container";

function About() {
  return (
    <section id="about">
      <Container>
        <div
          className="flex items-center min-h-screen w-full px-[50px] bg-cover bg-center"
        >
          <div className="w-1/2">
            <img src={imgAbout} alt="Image About" />
          </div>
          
          <div className="w-1/2">
            <h2
              style={{ fontFamily: "Roboto" }}
              className="text-lg text-[#3cb815] font-medium"
            >
              ABOUT US
            </h2>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-[#1a2428]">
              We Believe In Working With Accredited Farmers
            </h1>
            <p className="mb-4 text-base text-[#868990]">
            Organic Foods And Cafe Is A Family Run Company That Runs Organic
            </p>
            <p className="mb-4 text-base text-[#868990]">
            Super Markets And Cafes Selling Fresh Organic And Biodynamic Food,
            </p>
            <p className="mb-4 text-base text-[#868990]">
            Suppliers, Skincare, Cosmetics, Baby Items And Household Cleaning
            </p>
            <p className="mb-10 text-base text-[#868990]">
            Products. We Have 5 Shops In Dubai - On Sheikh Zayed Road.
            </p>
            <ButtonOvalImg>Learn More</ButtonOvalImg>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About
import imgAbout from "../assets/img/about-img.png";
import ButtonOvalImg from "../components/ButtonOvalImg";
import Container from "../components/Container";

function About() {
  return (
    <section id="about">
      <Container>
        <div className="flex flex-col lg:flex-row mb-8 lg:mb-0 items-center min-h-screen w-full px-4 lg:px-[50px] bg-cover bg-center">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <img src={imgAbout} alt="Image About" className="mx-auto lg:mx-0" />
          </div>

          <div className="lg:w-1/2 w-full">
            <h2
              style={{ fontFamily: "Roboto" }}
              className="text-lg text-[#3cb815] font-medium text-center lg:text-left"
            >
              ABOUT US
            </h2>
            <h1 className="mb-4 text-3xl lg:text-5xl font-bold leading-tight text-[#1a2428] text-left">
              We Believe In Working With Accredited Farmers
            </h1>
            <p className="mb-2 text-sm lg:text-base text-[#868990] text-left">
              Organic Foods And Cafe Is A Family Run Company That Runs Organic
            </p>
            <p className="mb-2 text-sm lg:text-base text-[#868990] text-left">
              Super Markets And Cafes Selling Fresh Organic And Biodynamic Food,
            </p>
            <p className="mb-2 text-sm lg:text-base text-[#868990] text-left">
              Suppliers, Skincare, Cosmetics, Baby Items And Household Cleaning
            </p>
            <p className="mb-6 text-sm lg:text-base text-[#868990] text-left">
              Products. We Have 5 Shops In Dubai - On Sheikh Zayed Road.
            </p>
            <div className="flex justify-center lg:justify-start">
              <ButtonOvalImg>Learn More</ButtonOvalImg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About

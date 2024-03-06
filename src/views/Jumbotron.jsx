import Container from "../components/Container";
import background from "../assets/img/jumbotron-bg.png";
import imgJumbotron from "../assets/img/jumbotron-img.png";
import ButtonOvalImg from "../components/ButtonOvalImg";

function Jumbotron() {
  return (
    <section id="jumbotron">
      <Container>
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="flex items-center min-h-screen w-full px-[50px] bg-cover bg-center"
        >
          <div className="w-1/2">
            <h2
              style={{ fontFamily: "Roboto" }}
              className="text-xl text-[#3cb815] font-medium"
            >
              WE ARE DELICACY
            </h2>
            <h1 className="mb-10 text-7xl font-bold leading-tight text-[#1a2428]">
              Choose delicacy the best healthy way to life
            </h1>
            <ButtonOvalImg>Shop now</ButtonOvalImg>
          </div>
          <div className="w-1/2">
            <img src={imgJumbotron} alt="Image Jumbotron" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Jumbotron;

import CardTestimonial from "../components/CardTestimonial";
import Container from "../components/Container";

// Import Image URL
import woman1 from "../assets/img/Image 3.png";
import woman2 from "../assets/img/Image 4.png";
import man from "../assets/img/Image 6.png";
import ButtonCircle from "../components/ButtonCircle";

function Testimonial() {
  const data = [
    {
      id: 1,
      ratings: 5,
      imgUrl: woman1,
      imgAlt: "Woman 1",
      clientName: "Michele Smith",
      clientPosition: "CDO",
      clientWork: "Weblabx",
      children: `This plugin is amazing with the current
        version, I can't imagine it, how cool will it be
        when you finish the all `,
    },
    {
      id: 2,
      ratings: 5,
      imgUrl: man,
      imgAlt: "Man",
      clientName: "David Andersin",
      clientPosition: "CEO",
      clientWork: "SofwareGix",
      children: `This plugin is amazing with the current
        version, I can't imagine it, how cool will it be
        when you finish the all `,
    },
    {
      id: 3,
      ratings: 5,
      imgUrl: woman2,
      imgAlt: "Woman 2",
      clientName: "Michele Smith",
      clientPosition: "CDO",
      clientWork: "Amazon.com",
      children: `This plugin is amazing with the current
        version, I can't imagine it, how cool will it be
        when you finish the all `,
    },
  ];
  return (
    <div>
      <section id="testimonial">
        <Container>
          <div className="mb-20 ">
            <h4 className="mb-20 text-4xl font-bold leading-tight text-center text-[#1a2428]">
              Best Selling Products
            </h4>
            <div className="inline-flex gap-6 text-justify">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <ButtonCircle id="best-product" direction="left" />
                </div>
              </div>
              {data.map((d, index) => (
                <div key={index}>
                  <CardTestimonial
                    ratings={d.ratings}
                    children={d.children}
                    imgUrl={d.imgUrl}
                    imgAlt={d.imgAlt}
                    clientName={d.clientName}
                    clientPosition={d.clientPosition}
                    clientWork={d.clientWork}
                  />
                </div>
              ))}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <ButtonCircle id="best-product" direction="right" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Testimonial;

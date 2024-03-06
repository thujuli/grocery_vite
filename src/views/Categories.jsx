import ButtonOvalImg from "../components/ButtonOvalImg";
import Container from "../components/Container";
import CardCategory from "../components/CardCategory";
import fruit from "../assets/img/category-fruit.png";
import vegetable from "../assets/img/category-vegetable.png";
import drinks from "../assets/img/category-drink.png";
import nuts from "../assets/img/category-nut.png";
import spices from "../assets/img/category-spice.png";

function Categories() {
  const data = [
    {
      name: "Fruits",
      img: fruit,
      alt: "Fruits",
      amount: "22 Items",
      backgroundColor: "bg-[#FEF4EA]",
    },
    {
      name: "Vegetables",
      img: vegetable,
      amount: "23 Items",
      alt: "Vegetables",
      backgroundColor: "bg-[#E0F7FA]",
    },
    {
      name: "Drinks",
      img: drinks,
      amount: "23 Items",
      alt: "Drinks",
      backgroundColor: "bg-[#FFF9C4]",
    },
    {
      name: "Fresh Nuts",
      img: nuts,
      amount: "30 Items",
      backgroundColor: "bg-[#F8BBD0]",
    },
    {
      name: "Spices",
      img: spices,
      amount: "23 Items",
      backgroundColor: "bg-[#D1C4E9]",
    },
  ];

  return (
    <section id="jumbotron">
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <h4 className="mb-5 text-4xl font-bold leading-tight text-[#1a2428]">
              Browse Our Hottest <br />
              <span className="text-3xl mt-3 text-[#82C341] font-bold">
                Categories
              </span>
            </h4>
          </div>
          <div className="px-10">
            <ButtonOvalImg>See All</ButtonOvalImg>
          </div>
        </div>
        <div className="flex relative h-[340px]  m-auto">
          {data.map((d, index) => (
            <div key={index} className="m-5">
              <CardCategory
                imgUrl={d.img}
                title={d.name}
                imgAlt={d.alt}
                content={`(${d.amount})`}
                bgColor={d.backgroundColor}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Categories;

import CardBlog from "../components/CardBlog";
import Container from "../components/Container";
import blogDetox from "../assets/img/blog-detox.jpg";
import blogPizza from "../assets/img/blog-pizza.jpg";
import blogVegetables from "../assets/img/blog-vegetables.jpg";

function Blogs() {
  return (
    <section id="blogs">
      <Container>
        <h2 className="mb-20 mt-24 text-3xl font-bold text-black text-center">
          Latest News & Blogs
        </h2>
        <div className="flex gap-4 md:gap-6 mb-24 pb-40 px-4 md:px-0 justify-start md:justify-center overflow-x-scroll md:overflow-auto">
          <CardBlog
            imgUrl={blogDetox}
            imgAlt="What is Detox"
            author="Deniel"
            datePost={new Date(2021, 7, 7)}
            title="What You Should Know About Detox"
            totalComments={3}
          />
          <CardBlog
            imgUrl={blogPizza}
            imgAlt="Pizza with chicken"
            author="Deniel"
            datePost={new Date(2021, 7, 7)}
            title="Pizza With Chicken, Of Tomatoes And Basil"
            totalComments={4}
          />
          <CardBlog
            imgUrl={blogVegetables}
            imgAlt="Eat Greens Everyday"
            author="Deniel"
            datePost={new Date(2021, 7, 7)}
            title="5 Reasons You Must Eat Greens Everyday"
            totalComments={10}
          />
        </div>
      </Container>
    </section>
  );
}

export default Blogs;

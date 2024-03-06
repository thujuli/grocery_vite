import React from 'react';
import CardPromo from '../components/CardPromo';
import woman from'../assets/img/woman.png';
import juice from'../assets/img/juice.png';
import sayur from'../assets/img/vegetable.png';
import Container from "../components/Container";

function Promo() {
  return (
    <section id="promo">
    <Container>
    <div className='my-24 flex justify-center items-center gap-4'>
        <CardPromo
            imageUrl={woman}
            title="UPTO 20% OFF"
            subtitle="Collected From Gardens"
            bgColor="green"
            text= "white"
        />
        <CardPromo
            imageUrl={sayur}
            title="UPTO 20% OFF"
            subtitle="Change Your Diet Plan"
            bgColor="greenlight"
            text="black"
        />
        <CardPromo
            imageUrl={juice}
            title="NATURAL FREASH"
            subtitle="Vegetable 100% Organic"
            bgColor="orange"
            text="white"
        />
    </div>
    </Container>
    </section>
  );
}

export default Promo;

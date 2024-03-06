import Container from "./Container";

// Import Image Icon
import Mastercard from "../assets/img/mastercard.png";
import Paypal from "../assets/img/paypal.png";
import AmericanExpress from "../assets/img/american_express.png";
import Bitcoin from "../assets/img/bitcoin.png";
import WesternUnion from "../assets/img/western_union.png";
import Visa from "../assets/img/visa.png";

function Copyright() {
  const year = new Date().getFullYear();
  const data = [
    {
      id: 1,
      img: Mastercard,
    },
    {
      id: 2,
      img: Paypal,
    },
    {
      id: 3,
      img: AmericanExpress,
    },
    {
      id: 4,
      img: Bitcoin,
    },
    {
      id: 5,
      img: WesternUnion,
    },
    {
      id: 6,
      img: Visa,
    },
  ];
  return (
    <div id="copyright" className="pt-5">
      <Container>
        <div className="flex justify-between items-center">
          <div id="footer" className="flex-initial">
            &copy; {year} Delicacy Store
          </div>
          <div id="footer_tengah" className="flex items-center gap-20">
            <span>Privacy Policy</span>
            <span>Terms & Condition</span>
            <span>Cookies/Ad Cookies</span>
          </div>
          <div id="footer_end" className="flex-initial text-right">
            {data.map((d, index) => (
              <img key={index} src={d.img} alt="" className="w-8 ml-2" />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Copyright;

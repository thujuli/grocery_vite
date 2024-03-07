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
    <div id="copyright" className="pt-5 mb-20">
      <Container>
        <div className="flex justify-between items-center">
          <div
            id="footer"
            className="flex-initial text-gray-500"
            style={{ fontFamily: "Roboto", fontSize: "14px" }}
          >
            &copy; {year} Delicacy Store
          </div>
          <div id="footer_tengah" className="flex items-center gap-20">
            <span
              className="text-gray-500"
              style={{ fontFamily: "Roboto", fontSize: "14px" }}
            >
              Privacy Policy
            </span>
            <span
              className="text-gray-500"
              style={{ fontFamily: "Roboto", fontSize: "14px" }}
            >
              Terms & Condition
            </span>
            <span
              className="text-gray-500"
              style={{ fontFamily: "Roboto", fontSize: "14px" }}
            >
              Cookies/Ad Cookies
            </span>
          </div>
          <div
            id="footer_end"
            className="flex-initial text-right flex items-center gap-3"
          >
            {data.map((d, index) => (
              <img key={index} src={d.img} alt="" className="w-8 h-auto" />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Copyright;

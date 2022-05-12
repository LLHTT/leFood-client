import "../style/WhyUs.css";
import Why1 from "../images/why1.png";
import Why2 from "../images/why2.png";
import Why3 from "../images/why3.png";
import { Link } from "react-router-dom";

export default function WhyUs() {
  return (
    <section className="why">
      <h1 className="why-title">Why Choose leFood?</h1>
      <div className="why-container">
        <div>
          <img src={Why1} alt="Budget pricing" />
          <h3>Budget Pricing</h3>
          <p>
            The purpose of lorem ipsum is to create a natural looking block of
            text.
          </p>
          <Link to="/#">Learn More</Link>
        </div>
        <div>
          <img src={Why2} alt="Chef plan" />
          <h3>Chef Plan For You</h3>
          <p>
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <Link to="/#">Learn More</Link>
        </div>
        <div>
          <img src={Why3} alt="Delivery" />
          <h3>Super Fast Delivery</h3>
          <p>
            Use our generator to get your own, or read on for the authoritative
            history.
          </p>
          <Link to="/#">Learn More</Link>
        </div>
      </div>
    </section>
  );
}

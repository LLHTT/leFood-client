import "../style/Hero.css";
import OrderButton from "./OrderButton";
import Typed from "react-typed";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Breakfast Made For You</h1>
        <div className="wrapper">
          <div className="static-txt">Stay</div>
          <div className="dynamic-txt">
            <Typed
              strings={["Home", "Safe", "Healthy"]}
              typeSpeed={90}
              backSpeed={70}
              loop
            />
          </div>
        </div>
        <p className="hero-tag">Order online for super-fast delivery</p>
        <OrderButton />
      </div>
      <div className="i-bg"></div>
    </div>
  );
}

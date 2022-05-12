import { useState } from "react";
import "../style/VeganBreakfast.css";
import VeganIntro from "../images/vegan3.jpg";
import VeganItem from "./VeganItem";
import veganItems from "../data/veganItems";

function VeganBreakfast() {
  const [veganFoodItem, setVeganFoodItem] = useState(veganItems);

  return (
    <div id="vegan">
      <div className="vegan__panel">
        <h1>Vegan Breakfast</h1>
      </div>
      <div className="vegan__intro">
        <div className="vegan__intro__left">
          <h2>Vegan Diet Basics & How to Get Started </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
          <p>
            Learn more:{" "}
            <a
              href="https://www.eatingwell.com/article/292024/ultimate-guide-to-the-vegan-diet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ultimate Guide to the Vegan Diet
            </a>
          </p>
        </div>
        <div className="vegan__intro__right">
          <img src={VeganIntro} alt="vegan diet" />
        </div>
      </div>
      <div className="vegan__items">
        <h2>What to Eat on a Vegan Diet</h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <VeganItem veganFoodItem={veganFoodItem} />
      </div>
    </div>
  );
}

export default VeganBreakfast;

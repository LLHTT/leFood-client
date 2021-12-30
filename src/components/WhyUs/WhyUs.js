import './WhyUs.css';
import Why1 from "../../images/why1.png";
import Why2 from "../../images/why2.png";
import Why3 from "../../images/why3.png";
import { Link } from 'react-router-dom';

export default function WhyUs() {
    return (
        <section className="why">
            <h1 className="why-title">Why Choose LeFood?</h1>
            <div className="why-container">
                <div>
                    <img src={Why1} alt="Budget pricing" />
                    <h3>Budget Pricing</h3>
                    <p>Excepteur sint occaecat cupidatat non proident anim id est laborum.</p>
                    <Link to="/#">Learn More</Link>
                </div>
                <div>
                    <img src={Why2} alt="Chef plan" />
                    <h3>Chef Plan For You</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ea commodo consequat.</p>
                    <Link to="/#">Learn More</Link>
                </div>
                <div>
                    <img src={Why3} alt="Delivery" />
                    <h3>Super Fast Delivery</h3>
                    <p>Duis aute irure dolor in reprehenderit in dolore eu fugiat nulla pariatur.</p>
                    <Link to="/#">Learn More</Link>
                </div>
            </div>
        </section>
    )
}
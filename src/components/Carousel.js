import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slide1 from "../images/bfast-deli.jpg"
import Slide2 from "../images/custom-bfast.jpg"
import Slide3 from "../images/vegan-bfast.jpg"
import Slide4 from "../images/event.jpg"
import { HashLink } from 'react-router-hash-link'

export default function Carousel() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true
    }

    return (
        <Slider {...settings} className="carousel">
            <HashLink to="/services#deli">
                <div className="card">
                    <div className="card-image">
                        <img src={Slide1} alt="breakfast delivery"/>
                    </div>
                    <div className="card-content">
                        <h3>Breakfast Delivery</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </HashLink>
            <HashLink to="/services#custom">
                <div className="card">
                    <div className="card-image">
                        <img src={Slide2} alt="custom breakfast"/>
                    </div>
                    <div className="card-content">
                        <h3>Custom Breakfast</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </HashLink>
            <HashLink to="/services#vegan">
                <div className="card">
                    <div className="card-image">
                        <img src={Slide3} alt="vegan breakfast"/>
                    </div>
                    <div className="card-content">
                        <h3>Vegan Breakfast</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </HashLink>
            <HashLink to="/services#events">
                <div className="card">
                    <div className="card-image">
                        <img src={Slide4} alt="event"/>
                    </div>
                    <div className="card-content">
                        <h3>Events</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </HashLink>
        </Slider>
    )
}
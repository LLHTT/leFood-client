import Hero from "../components/Hero"
import WhyUs from "../components/WhyUs"
import About from "./About"
import Carousel from "../components/Carousel"
import OurCommunity from "../components/OurCommunity"
import Testimonial from "../components/Testimonial"
import Footer from "../components/Footer"
import "../style/ServicesSection.css"

export default function Home() {
    return (
        <div>
            <Hero />
            <WhyUs />
            <hr />
            <About />
            <hr />
            <section className="services-section">
                <div className="services-container">
                    <h1 className="services-title">Our Services</h1>
                    <p className="services-txt">Lorem ipsum dolor sit amet, sunt earch consectetur elit, sed do eiusmod ihead tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occa ecat cupi datat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <Carousel />
            </section>
            <hr />
            <OurCommunity />
            <hr />
            <Testimonial />
            <Footer />        
        </div>
    )
}
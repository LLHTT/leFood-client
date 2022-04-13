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
        <>
            <Hero />
            <div className="home">
                <WhyUs />
                <hr />
                <About />
                <hr />
                <section className="services-section">
                    <div className="services-container">
                        <h1 className="services-title">Our Services</h1>
                        <p className="services-txt">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                    <Carousel />
                </section>
                <hr />
                <OurCommunity />
                <hr />
                <Testimonial />
            </div>
            <Footer />        
        </>
    )
}
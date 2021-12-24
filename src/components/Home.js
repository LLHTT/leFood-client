import Hero from "./Hero/Hero";
import WhyUs from "./WhyUs/WhyUs";
import About from "./About/About";
import OurServices from "./OurServices/OurServices";
import OurCommunity from "./OurCommunity/OurCommunity";
import Testimonial from "./Testimonial/Testimonial";
import Footer from "./Footer/Footer";

export default function Home() {
    return (
        <div>
            <Hero />
            <WhyUs />
            <hr />
            <About />
            <hr />
            <OurServices />
            <hr />
            <OurCommunity />
            <hr />
            <Testimonial />
            <Footer />        
        </div>
    )
}
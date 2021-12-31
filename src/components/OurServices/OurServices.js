import './OurServices.css'
import ImageSlider from '../Carousel'

export default function Services() {
    return (
        <section className="services">
            <div className="services-container">
                <h1 className="services-title">Our Services</h1>
                <p className="services-txt">Lorem ipsum dolor sit amet, sunt earch consectetur elit, sed do eiusmod ihead tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occa ecat cupi datat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <ImageSlider />
        </section>
    )
}
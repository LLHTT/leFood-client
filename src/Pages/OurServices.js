import BreakfastDelivery from '../components/BreakfastDelivery'
import CustomBreakfast from '../components/CustomBreakfast'
import VeganBreakfast from '../components/VeganBreakfast'
import Events from '../components/Events'
import Footer from '../components/Footer'

export default function Services() {
    return (
        <>
            <div className="services">
                <BreakfastDelivery />
                <CustomBreakfast />
                <VeganBreakfast />
                <Events />
            </div>
            <Footer />
        </>
    )
}
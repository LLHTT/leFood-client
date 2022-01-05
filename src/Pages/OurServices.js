import BreakfastDelivery from '../components/BreakfastDelivery'
import CustomBreakfast from '../components/CustomBreakfast'
import VeganBreakfast from '../components/VeganBreakfast'
import Events from '../components/Events'


export default function Services() {
    return (
        <div className="our-services">
            <BreakfastDelivery />
            <CustomBreakfast />
            <VeganBreakfast />
            <Events />
        </div>
    )
}
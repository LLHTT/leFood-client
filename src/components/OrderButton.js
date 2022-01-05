import { Link } from "react-router-dom"

function OrderButton() {
    return (
        <Link to="/order" className="order-btn">Order now</Link>     
    )
}

export default OrderButton

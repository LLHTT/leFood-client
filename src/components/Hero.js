import "../style/Hero.css"
import OrderButton from "./OrderButton"

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">Breakfast Made For You</h1>
                <div className="wrapper">
                    <div className="static-txt">Stay</div>
                    <ul className="dynamic-txt">
                        <li><span>Healthy</span></li>
                        <li><span>Safe</span></li>
                        <li><span>At Home</span></li>
                    </ul>
                </div>
                <p className="hero-tag">Order online for super-fast delivery</p>
                <OrderButton />     
            </div>
            <div className="i-bg"></div>
        </div>
    )
}
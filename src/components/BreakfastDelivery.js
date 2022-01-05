import React from 'react'
import '../style/BreakfastDelivery.css'
import GoogleMap from './GoogleMap'
import OrderButton from './OrderButton'

function BreakfastDelivery() {
    return (
        <div id="deli">
            <div className="deli__panel">
                <h1>Breakfast Delivery</h1>
            </div>
            <div className="deli__location">
                <div className="location__map">
                    <GoogleMap />
                </div>
                <div className="location__content">
                    <h2>Breakfast Delivery</h2>
                    <div className="location__info">
                        <p>Ordering in today? Here's your best option: Breakfast Delivery by LeFood.</p>
                        <p>Get served like a king and forget about doing the dishes.</p>
                        <p>Simply select "Order now" button and choose your food delivery.</p>
                    </div>
                    <div className="location__fee">
                        <p>⚪ Zone 1, Min - ₫0, Fee - ₫0 </p>
                        <p>⚪ Zone 2, Min - ₫0, Fee - ₫20,000 </p>
                        <p>⚪ Zone 3, Min - ₫0, Fee - ₫30,000 </p>
                    </div>
                    <OrderButton />
                </div>
            </div>
        </div>
    )
}

export default BreakfastDelivery

import React from "react";
import "../style/BreakfastDelivery.css";
import GoogleMap from "./GoogleMap";
import OrderButton from "./OrderButton";

function BreakfastDelivery() {
  return (
    <div id="deli">
      <div className="deli__panel">
        <h1>Breakfast Delivery</h1>
      </div>
      <div className="deli__intro">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div className="deli__location">
        <div className="location__map">
          <GoogleMap />
        </div>
        <div className="location__content">
          <h2>Breakfast Delivery</h2>
          <div className="location__info">
            <p>
              Ordering in today? Here's your best option: Breakfast Delivery by
              leFood.
            </p>
            <p>Get served like a king and forget about doing the dishes.</p>
            <p>
              Simply select "Order now" button and choose your food delivery.
            </p>
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
  );
}

export default BreakfastDelivery;

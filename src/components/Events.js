import "../style/Events.css";
import EventsImg1 from "../images/event2.jpg";
import EventsImg2 from "../images/event3.jpg";
import EventsImg3 from "../images/event4.jpg";
import { Link } from "react-router-dom";

function Events() {
  return (
    <div id="events">
      <div className="events__panel">
        <h1>Events</h1>
      </div>
      <div className="events__container">
        <div className="events__left">
          <img
            src={EventsImg1}
            alt="Man serving food"
            className="events__img1"
          />
          <img
            src={EventsImg2}
            alt="Fruit juices  cocktail"
            className="events__img2"
          />
          <img
            src={EventsImg3}
            alt="Wine glasses cheer"
            className="events__img3"
          />
        </div>
        <div className="events__right">
          <div className="events__content">
            <h2>Food Events</h2>
            <p>
              <strong>
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text.
              </strong>
            </p>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour,
              or non-characteristic words etc.
            </p>
          </div>
          <Link to="/contact">
            <button className="contact-btn">Contact Us!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Events;

import "../style/OurCommunity.css";
import { Link } from "react-router-dom";

export default function OurCommunity() {
  return (
    <section className="community">
      <h1 className="community-title">Our Community</h1>
      <p className="community-txt">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
      <div className="community-row1">
        <div className="community-img1"></div>
        <div className="sub-row sub-row1">
          <h3>Find something to cook?</h3>
          <p>Learn everything there is to know about the passage.</p>
          <button>
            <Link to="/recipes">Recipe App</Link>
          </button>
        </div>
      </div>
      <div className="community-row2">
        <div className="community-img2"></div>
        <div className="sub-row sub-row2">
          <h3>Looking for a job?</h3>
          <p>From its medieval origins to the digital era.</p>
          <button>Our Career</button>
        </div>
      </div>
    </section>
  );
}

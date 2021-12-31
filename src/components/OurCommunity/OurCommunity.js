import "./OurCommunity.css"
import { Link } from "react-router-dom"

export default function OurCommunity() {
    return (
        <section className="community">
            <h1 className="community-title">Our Community</h1>
            <p className="community-txt">Lorem ipsum dolor sit amet, elit, sed do eius mod tempor incididunt ut labore to dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation torch ullamco ut laboris nisi ut aliquip ex earche commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nutella arc pariatur.</p>
            <div className="community-row1">
                <div className="community-img1"></div>
                <div className="sub-row sub-row1">
                    <h3>Find something to cook?</h3>
                    <p>Duis aute irure dolor in reprehenderit in fugiat nulla pariatur.</p>
                    <button><Link to="/recipes">Recipe App</Link></button>
                </div>
            </div>
            <div className="community-row2">
                <div className="community-img2"></div>
                <div className="sub-row sub-row2">
                    <h3>Looking for a job?</h3>
                    <p>Excepteur sint non proident, sunt in culpa qui officia mollit.</p>
                    <button>Our Career</button>
                </div>
            </div>
        </section>
    )
}
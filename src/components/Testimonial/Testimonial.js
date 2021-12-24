import "./Testimonial.css";

export default function Testimonial() {
    return (
        <section className="testimonial">
            <h1 className="testimonial-title">People love their perfect breakfast</h1>
            <div className="testimonial-container">
                <div>
                    <blockquote>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <figcaption>—Lawrence Le</figcaption>
                    </blockquote>
                </div>
                <div>
                    <blockquote>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        <figcaption>—Julie Lai</figcaption>
                    </blockquote>
                </div>
                <div>
                    <blockquote>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id laborum. </p>
                        <figcaption>—Corazon L.</figcaption>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}
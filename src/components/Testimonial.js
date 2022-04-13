import "../style/Testimonial.css"

export default function Testimonial() {
    return (
        <section className="testimonial">
            <h1 className="testimonial-title">People love their perfect breakfast</h1>
            <div className="testimonial-container">
                <div>
                    <blockquote>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        <figcaption>—Lawrence Le</figcaption>
                    </blockquote>
                </div>
                <div>
                    <blockquote>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                        <figcaption>—Julie Lai</figcaption>
                    </blockquote>
                </div>
                <div>
                    <blockquote>
                        <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.</p>
                        <figcaption>—Corazon L.</figcaption>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}
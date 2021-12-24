import "./Contact.css";
import {useState} from  'react';
import Axios from 'axios';


export default function Contact() {
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactMessage, setContactMessage] = useState("");

    const sendContact = (event) => {
        event.preventDefault()
        // Axios request to insert db/ send data to back-end
        Axios.post("http://localhost:3001/contacts", {
          contactName: contactName,
          contactEmail: contactEmail,
          contactMessage: contactMessage
        })
        .then((response) => {
            alert('Thank you! We will contact you shortly!')
            setContactName('')
            setContactEmail('')
            setContactMessage('')
        })
        .catch((err) => {
            console.log(`There was an Error: {err}`)
        })
    };

    return (
        <section className="contact">
            <h1 className="contact-title">Let's make something amazing together.</h1>
            <div className="contact-container">
                <div>
                    <p className="contact-txt">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                </div>
                <div>
                    <form className="contact-form" onSubmit={sendContact}>
                        <label>Name</label>
                        <input
                            type="text"
                            value={contactName}
                            onChange={(event) => {
                                setContactName(event.target.value);
                            }}
                            required
                            className="input-contact-name"
                        />
                        <label>Email Address</label>
                        <input
                            type="text"
                            value={contactEmail}
                            onChange={(event) => {
                                setContactEmail(event.target.value);
                            }}
                            required
                            className="input-contact-email"
                        />
                        <label>Message</label>
                        <textarea
                            value={contactMessage}
                            rows="5"
                            onChange={(event) => {
                                setContactMessage(event.target.value);
                            }}
                            required
                            className="input-contact-message"
                        />
                        <button className="contact-btn">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
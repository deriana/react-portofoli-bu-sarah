import "./contact.css"
import Nav from "./Nav"

const Contact = () => {
    return (
        <div className="contact">
            <Nav />
            <div className="contact-content">
                <h1>Contact Me</h1>
                <div className="contact-info">
                    <div className="info">
                        <i className="fa-solid fa-phone"></i>
                        <div className="info-text">
                            <h2>Call Me</h2>
                            <p>+62 8958 0874 7030</p>
                            <p>201 535 4412</p>
                        </div>
                    </div>
                    <div className="info">
                        <i className="fa-solid fa-envelope"></i>
                        <div className="info-text">
                            <h2>E-Mail</h2>
                            <p>derana765@gmail.com</p>
                            <p>hideri@gmail.com</p>
                        </div>
                    </div>
                    <div className="info">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="info-text">
                            <h2>Location</h2>
                            <p>West Java</p>
                            <p>Indonesia</p>
                        </div>
                    </div>
                </div>
                <h1>Get In Touch</h1>
                <form action="submit">
                    <div>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    </div>
                    <input type="text" placeholder="Subject"/>
                    <textarea name="message" placeholder="Message"></textarea>
                    <button className="submit-btn">
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
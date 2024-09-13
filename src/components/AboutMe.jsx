import "./aboutme.css"
import Profile from "../assets/profile.jpeg"
import Nav from "./Nav"
import CV from "../assets/cv/Deryana Maruf_2.pdf"

const AboutMe = () => {
    return (
        <div className="aboutme">
            <Nav />
            <div className="aboutme-content">
                <div className="aboutme-title">
                    <h1>About Me</h1>
                </div>
                <div className="profile-container">
                    <div className="profile-img">
                        <img src={Profile} alt="Deryana" />
                    </div>
                    <div className="profile-text">
                        <div>
                            <h2>Deryana Maruf</h2>
                            <h3>Fullstack Developer</h3>
                        </div>
                        <p>Hello! I Deryana Maruf a self-taught & award winning
                            WebDevloper & Designer with over five years
                            work experience. I started in my childrens room, got
                            pro at renowned digital agencies akij co and nork blue lebel.
                            Now Im based in JawaBart, Indonesia, working for Apple fredmansky and enjoying
                            the life in the countryside. ike to travel. I have already travelled.
                        </p>
                        <p>I have a couple of hobbies but I like to travel. I have already travelled almost all the districts of our country with my father. I am fond of fruit.
                        </p>
                        <div className="profile-button">
                            <button><a href={CV}>Download CV</a></button>
                            <button><a href="https://www.linkedin.com/in/deryana-maruf-00b926292/">Hire Me</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
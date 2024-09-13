import { useState, useRef } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import MusicFile from "../assets/bg.mp3";

const Nav = () => {
    const [selectedMusic, setSelectedMusic] = useState(false);
    const audioRef = useRef(null);

    const handleMusicClick = () => {
        setSelectedMusic(prevState => {
            if (!prevState) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
            return !prevState;
        });
    };

    return (
        <header>
            <div className="header-title">
                <h1><span>H</span>ideri</h1>
                <i
                    className={`fa-solid fa-headphones ${selectedMusic ? 'musicclick' : ''}`}
                    onClick={handleMusicClick}
                ></i>
            </div>

            <nav>
                <Link to="/">
                    <p className="url-content"><i className="fa-solid fa-house"></i> Home</p>
                </Link>
                <Link to="/aboutme">
                    <p className="url-content"><i className="fa-solid fa-user"></i> About Me</p>
                </Link>
                <Link to="/resume">
                    <p className="url-content"><i className="fa-solid fa-file"></i> Resume</p>
                </Link>
                <Link to="/service">
                    <p className="url-content"><i className="fa-solid fa-screwdriver-wrench"></i> Service</p>
                </Link>
                <Link to="/portofolio">
                    <p className="url-content"><i className="fa-solid fa-images"></i> Portofolio</p>
                </Link>
                <Link to="/testimonial">
                    <p className="url-content"><i className="fa-solid fa-paintbrush"></i> Testimonials</p>
                </Link>
                <Link to="/contact">
                    <p className="url-content"><i className="fa-solid fa-envelope"></i> Contact</p>
                </Link>
                {/* <p className="url-content"><i className="fa-brands fa-blogger-b"></i> Blog</p> */}
            </nav>
            <nav className="sosmed">
                <a href="https://www.facebook.com/jerri.maruf" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/hi_deri_/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://github.com/deriana" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/deryana-maruf-00b926292/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
            </nav>

            {/* Elemen Audio */}
            <audio ref={audioRef} src={MusicFile} loop>
                Your browser does not support the audio element.
            </audio>
        </header>
    );
};

export default Nav;

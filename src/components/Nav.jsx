import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import MusicFile from "../assets/bg.mp3";

const Nav = () => {
    // State for music and responsive navigation
    const [selectedMusic, setSelectedMusic] = useState(false);
    const [isResponsiveNavOpen, setIsResponsiveNavOpen] = useState(false);

    // Refs for audio and navigation
    const audioRef = useRef(null);
    const navRef = useRef(null);

    // Music control handler
    const handleMusicClick = () => {
        setSelectedMusic((prevState) => {
            if (!prevState) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
            return !prevState;
        });
    };

    // Responsive navigation toggle
    const toggleResponsiveNav = () => {
        setIsResponsiveNavOpen((prev) => !prev);
    };

    const closeResponsiveNav = () => {
        setIsResponsiveNavOpen(false);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            closeResponsiveNav();
        }
    };

    useEffect(() => {
        if (isResponsiveNavOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isResponsiveNavOpen]);

    return (
        <header className={isResponsiveNavOpen ? "header-responsive" : ""}>
            <div className="header-title">
                <div>
                    <h1><span>H</span>ideri</h1>
                    <i
                        className={`fa-solid fa-headphones ${selectedMusic ? 'musicclick' : ''}`}
                        onClick={handleMusicClick}
                    ></i>
                </div>
                <i
                    className={`fa-solid ${isResponsiveNavOpen ? "fa-x" : "fa-bars"}`}
                    onClick={toggleResponsiveNav}
                ></i>
            </div>

            {/* Main Navigation */}
            <nav ref={navRef} className={`responsive-nav ${isResponsiveNavOpen ? "open" : ""}`}>
                <Link to="/" onClick={closeResponsiveNav}>
                    <p className="url-content"><i className="fa-solid fa-house"></i> Home</p>
                </Link>
                <Link to="/aboutme" onClick={closeResponsiveNav}>
                    <p className="url-content"><i className="fa-solid fa-user"></i> About Me</p>
                </Link>
                <Link to="/resume" onClick={closeResponsiveNav}>
                    <p className="url-content"><i className="fa-solid fa-file"></i> Resume</p>
                </Link>
                <Link to="/service" onClick={closeResponsiveNav}>
                    <p className="url-content"><i className="fa-solid fa-screwdriver-wrench"></i> Service</p>
                </Link>
                <Link to="/portofolio" onClick={closeResponsiveNav}>
                    <p className="url-content"><i className="fa-solid fa-images"></i> Portfolio</p>
                </Link>
                <Link to="/testimonial" onClick={closeResponsiveNav}>
                    <p className="url-content"><i className="fa-solid fa-paintbrush"></i> Testimonials</p>
                </Link>
                <Link to="/contact" onClick={closeResponsiveNav}>
                    <p className="url-content"><i className="fa-solid fa-envelope"></i> Contact</p>
                </Link>
                <Link to="/blog" onClick={closeResponsiveNav}>
                    <p className="url-content"><i className="fa-brands fa-blogger-b"></i> Blog</p>
                </Link>
            </nav>

            {/* Social Media Navigation */}
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

            {/* Audio Element */}
            <audio ref={audioRef} src={MusicFile} loop>
                Your browser does not support the audio element.
            </audio>
        </header>
    );
};

export default Nav;

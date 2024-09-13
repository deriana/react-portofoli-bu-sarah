import { useState } from "react";
import "./portofolio.css";
import Nav from "./Nav"

// Import gambar statis
import web1 from '../assets/portofolio-image/web1.png';
import web2 from '../assets/portofolio-image/web2.png';
import web3 from '../assets/portofolio-image/web3.png';
import web4 from '../assets/portofolio-image/web4.png';
import web5 from '../assets/portofolio-image/web5.png';
import web6 from '../assets/portofolio-image/web6.png';

// Import gambar desain
import design1 from '../assets/portofolio-image/design1.jpg';
import design2 from '../assets/portofolio-image/design2.jpg';
import design3 from '../assets/portofolio-image/design3.png';
import design4 from '../assets/portofolio-image/design4.jpg'; 
import design5 from '../assets/portofolio-image/design5.png'; 
import design6 from '../assets/portofolio-image/design6.png'; 

const Portofolio = () => {
    const [selectedCategory, setSelectedCategory] = useState("Website");
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [zoomedImage, setZoomedImage] = useState(""); 
    const [isDesignImage, setIsDesignImage] = useState(false); 

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleClick = (imageUrl, isDesign) => {
        setZoomedImage(imageUrl);
        setIsDesignImage(isDesign); 
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setZoomedImage(""); 
        setIsDesignImage(false); 
    };

    const websiteItems = [
        { name: "Web Portofolio", img: web1 },
        { name: "Web Api Recipe", img: web2 },
        { name: "Web Bookshelf", img: web3 },
        { name: "Web Gacha Holo", img: web4 },
        { name: "Web Hololive Id", img: web5 },
        { name: "Web Abydos School", img: web6 },
    ];

    const designItems = [
        { name: "Design D-Camp", img: design1 },
        { name: "Design Ramen", img: design2 },
        { name: "Ilustrasion Lamp", img: design3 },
        { name: "Design Gladiator Drink", img: design4 },
        { name: "Ilustration Night Sea", img: design5 },
        { name: "Design Starry Night", img: design6 },
    ];

    return (
        <div className="portofolio">
            <Nav />
            <div className="portofolio-content">
                <h1>Portfolio</h1>
                <nav>
                    <p onClick={() => handleCategoryChange("Website")} className={selectedCategory === "Website" ? "active" : ""}>Website</p>
                    <p onClick={() => handleCategoryChange("Design")} className={selectedCategory === "Design" ? "active" : ""}>Design</p>
                </nav>
                <div className="portofolio-container">
                    {selectedCategory === "Website" ? (
                        websiteItems.map((item, index) => (
                            <div
                                key={index}
                                className="portofolio-item"
                                style={{ backgroundImage: `url(${item.img})` }}
                                onClick={() => handleClick(item.img, false)}
                            >
                                <div className="overlay-content">
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        designItems.map((item, index) => (
                            <div
                                key={index}
                                className="portofolio-item design"
                                style={{ backgroundImage: `url(${item.img})` }}
                                onClick={() => handleClick(item.img, true)}
                            >
                                <div className="overlay-content">
                                    <p>{item.name}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img 
                            src={zoomedImage} 
                            alt="Zoomed" 
                            className={`modal-image ${isDesignImage ? 'design' : ''}`} 
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portofolio;

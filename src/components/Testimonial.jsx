import { useState, useEffect } from "react";
import "./testimonial.css";
import Nav from "./Nav";

// Import images
import pacarChinaImg from "../assets/testi-img/pacar-china.jpeg";
import hoshinoImg from "../assets/testi-img/hoshino.jpeg";
import hinaImg from "../assets/testi-img/pf.jpg";
import nonomiImg from "../assets/testi-img/nonomi.jpeg";
import ayaneImg from "../assets/testi-img/ayane.jpeg";
import rinImg from "../assets/testi-img/Rin.jpeg";
import serikaImg from "../assets/testi-img/serika.jpeg";
import shirokoImg from "../assets/testi-img/shiroko.jpeg";
import frierenImg from "../assets/testi-img/Frieren.jpg";
import starkImg from "../assets/testi-img/Stark.jpg";
import sousouImg from "../assets/testi-img/fern.jpg";
import seinImg from "../assets/testi-img/Sein.jpg";

const testimonials = [
  {
    name: "Kisaki",
    jobTitle: "Software Engineer",
    description:
      "The portfolio website showcases impressive full-stack skills, with a clean and intuitive design. The projects demonstrate a strong command of both front-end and back-end technologies.",
    rating: 5,
    imgUrl: pacarChinaImg,
  },
  {
    name: "Hoshino",
    jobTitle: "Frontend Developer",
    description:
      "I found the website's user interface both visually appealing and functional. It's evident that a lot of attention to detail was put into the front-end design, making it easy to navigate and understand.",
    rating: 5,
    imgUrl: hoshinoImg,
  },
  {
    name: "Hina",
    jobTitle: "Backend Developer",
    description:
      "The portfolio demonstrates a solid understanding of backend development. The integration with various APIs and databases is seamless, and the overall performance is excellent.",
    rating: 5,
    imgUrl: hinaImg,
  },
  {
    name: "Nonomi",
    jobTitle: "Full Stack Developer",
    description:
      "This portfolio is a great example of full-stack development expertise. The projects are well-structured, and the code is clean and efficient. A fantastic showcase of both front-end and back-end capabilities.",
    rating: 5,
    imgUrl: nonomiImg,
  },
  {
    name: "Ayane",
    jobTitle: "Data Scientist",
    description:
      "I was particularly impressed with the data visualization and handling. The website demonstrates the developer's ability to manage data effectively, making it easy to understand complex information.",
    rating: 4,
    imgUrl: ayaneImg,
  },
  {
    name: "Rin",
    jobTitle: "UI/UX Designer",
    description:
      "The design is exceptional, combining aesthetics with functionality. The website's layout and flow offer a great user experience, showcasing a deep understanding of UI/UX principles.",
    rating: 5,
    imgUrl: rinImg,
  },
  {
    name: "Serika",
    jobTitle: "Product Manager",
    description:
      "The portfolio clearly reflects the developer's ability to manage and execute projects. The attention to detail and the diversity of projects highlight their versatility and skill set.",
    rating: 4,
    imgUrl: serikaImg,
  },
  {
    name: "Shiroko",
    jobTitle: "DevOps Engineer",
    description:
      "A great demonstration of full-stack skills with a focus on seamless deployment and infrastructure management. The site performs well under different conditions, showing strong DevOps capabilities.",
    rating: 5,
    imgUrl: shirokoImg,
  },
  {
    name: "Frieren",
    jobTitle: "Mobile Developer",
    description:
      "The portfolio is responsive and mobile-friendly, which is a testament to the developer's commitment to accessibility. It looks great on any device, showcasing a keen eye for mobile development.",
    rating: 5,
    imgUrl: frierenImg,
  },
  {
    name: "Stark",
    jobTitle: "AI Specialist",
    description:
      "The integration of AI and machine learning components within the projects is impressive. The developer has shown creativity and technical proficiency in applying AI to solve real-world problems.",
    rating: 4,
    imgUrl: starkImg,
  },
  {
    name: "Fern",
    jobTitle: "Cloud Architect",
    description:
      "An excellent display of cloud integration and architecture. The portfolio illustrates an understanding of scalable solutions and efficient cloud management, which is crucial for modern web applications.",
    rating: 5,
    imgUrl: sousouImg,
  },
  {
    name: "Sein",
    jobTitle: "Cybersecurity Analyst",
    description:
      "The site reflects a good understanding of security best practices. It's clear that security is a priority, with secure data handling and attention to potential vulnerabilities.",
    rating: 4,
    imgUrl: seinImg,
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const startIndex = currentSlide * 4;
  const endIndex = startIndex + 4;
  const currentTestimonials = testimonials.slice(startIndex, endIndex);

  return (
    <div className="testi">
      <Nav />
      <div className="testi-content">
        <h1>Testimonial</h1>
        <div className="testi-container">
          {currentTestimonials.map((testimonial, index) => (
            <div className="testi-item" key={index}>
              <div
                className="cust-img"
                style={{ backgroundImage: `url(${testimonial.imgUrl})` }}
              ></div>
              <div className="cust-text">
                <div className="cust-title">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.jobTitle}</p>
                </div>
                <div className="cust-desc">
                  <p>{testimonial.description}</p>
                </div>
              </div>
              <div className="cust-star">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i className="fa-solid fa-star" key={i}></i>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="slider-navigation">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`slider-btn ${currentSlide === index ? "active" : ""}`}
              onClick={() => handleSlideChange(index)}
            >
              ●
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

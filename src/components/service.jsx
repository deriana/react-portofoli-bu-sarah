import Nav from "./Nav";
import "./service.css";

const services = [
    {
        icon: "fa-solid fa-code",
        title: "Web Development",
        description: "Developer with over five years work experience. I started in my children's room."
    },
    {
        icon: "fa-solid fa-pen",
        title: "Design",
        description: "Developer with over five years work experience. I started in my children's room."
    },
    {
        icon: "fa-solid fa-window-maximize",
        title: "Web Design",
        description: "Developer with over five years work experience. I started in my children's room."
    },
    {
        icon: "fa-solid fa-server",
        title: "Server Side",
        description: "Developer with over five years work experience. I started in my children's room."
    },
    {
        icon: "fa-solid fa-mobile",
        title: "Mobile APP",
        description: "Developer with over five years work experience. I started in my children's room."
    },
    {
        icon: "fa-solid fa-business-time",
        title: "Digital Marketing",
        description: "Developer with over five years work experience. I started in my children's room."
    }
];

const Service = () => {
    return (
        <div className="service">
            <Nav />
            <div className="service-container">
                <h1>Service</h1>
                <div className="service-content">
                    {services.map((service, index) => (
                        <div className="service-item" key={index}>
                            <i className={service.icon}></i>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;

import { useState, useEffect } from "react";
import "./CustomCursor.css"; // Pastikan file CSS ini ada

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
        }, 300); // Durasi animasi
    };

    return (
        <div
            className={`custom-cursor ${isClicked ? 'clicked' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
            onClick={handleClick} // Tambahkan event onClick
        />
    );
};

export default CustomCursor;

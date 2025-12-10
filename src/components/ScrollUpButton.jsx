import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollUpButton = () => {
    const [visible, setVisible] = useState(false);

    // toggle button visibility
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) setVisible(true);
            else setVisible(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // smooth scroll
    const scrollToTop = () => {
        const start = window.scrollY;
        const duration = 1600;
        const startTime = performance.now();

        const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = easeOutQuart(progress);

            window.scrollTo(0, start * (1 - ease));

            if (elapsed < duration) requestAnimationFrame(animateScroll);
        };

        requestAnimationFrame(animateScroll);
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 flex items-center justify-center cursor-pointer
                        w-12 h-12 rounded-full
                        bg-black 
                        border border-white/20
                        shadow-[0_0_20px_rgba(255,255,255,0.1),0_0_40px_rgba(255,255,255,0.05)]
                        hover:shadow-[0_0_30px_rgba(255,255,255,0.3),0_0_50px_rgba(255,255,255,0.2)]
                        transition-all duration-300
                        transform
                        ${visible ? "opacity-100 scale-100 animate-pulse" : "opacity-0 scale-75 pointer-events-none"}
                        hover:scale-105`}
        >
            <FaArrowUp className="text-white text-xl" />
        </button>
    );
};

export default ScrollUpButton;

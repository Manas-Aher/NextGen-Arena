import {FaGithub, FaTwitter, FaDiscord, FaTwitch} from "react-icons/fa";

// --- Social links ---
const socialLinks = [
    { href: "https://github.com", icon: <FaGithub /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://discord.com", icon: <FaDiscord /> },
    { href: "https://twitch.com", icon: <FaTwitch />}
];

// --- Navigation links ---
const navLinks = [
    { href: "#prologue", label: "Prologue" },
    { href: "#story", label: "Story" },
    { href: "#vault", label: "Gallery" },
    { href: "#contact", label: "Contact" },
];  

// --- Scroll to top (smooth) ---
const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 1800;
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

const Footer = () => {
    return (
        <footer className="relative w-full bg-black text-blue-50 border-t border-hsla overflow-hidden">
            {/* background radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(87,36,255,0.15),transparent_70%)] pointer-events-none"></div>

            {/* subtle gradient glow at top */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-300 via-blue-300 to-transparent opacity-70"></div>

            {/* Main content */}
            <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 relative z-10">

                {/* Branding (clickable logo) */}
                <div
                    onClick={scrollToTop}
                    className="flex flex-col items-center md:items-start cursor-pointer group"
                >
                    <h2 className="font-zentry special-font text-2xl uppercase tracking-wide transition group-hover:text-violet-300">
                        Ne<b>x</b>tgen Are<b>n</b>a
                    </h2>
                    <p className="mt-2 text-sm font-circular-web text-blue-75 text-center md:text-left">
                        Enter the multiversal IP world and shape your fate.
                    </p>
                </div>

                {/* Navigation */}
                <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="nav-hover-btn">
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Social Links */}
                <div className="flex gap-4 justify-center">
                    {socialLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-center size-10 rounded-full border-hsla hover:bg-violet-300/20 hover:shadow-[0_0_12px_rgba(87,36,255,0.5)] transition"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>

            {/* Bottom line with moving gradient */}
            <div className="relative border-t border-hsla py-4 text-center text-xs text-blue-75 overflow-hidden">
                © {new Date().getFullYear()} Zentry — All rights reserved.
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-violet-400 to-transparent animate-gradient-move"></div>
            </div>
        </footer>
    );
};

export default Footer;

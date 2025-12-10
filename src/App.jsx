
import "./index1.css";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Features from "./components/Features.jsx";
import Story from "./components/Story.jsx";
import Contact from "./components/Contact.jsx";
import Footer1 from "./components/Footer1.jsx";
import ScrollUpButton from "./components/ScrollUpButton.jsx";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden ">
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Story />
            <Contact />
            <Footer1 />
            <ScrollUpButton />
        </main>
    );
};

export default App;

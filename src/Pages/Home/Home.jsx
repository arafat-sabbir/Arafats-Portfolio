import Navbar from "../../Components/Navbar/Navbar";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Projects from "./Project/Projects";
import Skill from "./Skill/Skill";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;
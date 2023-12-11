import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Projects from "./Project/Projects";
import Skill from "./Skill/Skill";
import { IoArrowUp } from "react-icons/io5";

const Home = () => {
  const scrooltotop = () => {
  
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      <button
        className="fixed bg-gray-700 p-1 rounded-full text-main text-3xl bottom-8 right-8"
        onClick={scrooltotop}
      >
        <span className="p-4">
          <IoArrowUp />
        </span>
      </button>
    </div>
  );
};

export default Home;

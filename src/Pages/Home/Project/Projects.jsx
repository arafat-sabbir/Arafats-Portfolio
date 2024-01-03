import React, { useState } from "react";
import Title from "../../../Utils/Title";
import { VscGithubAlt } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";

const ImageWithScale = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      className={`w-full h-full object-cover transition-transform transform scale-${
        isHovered ? 100 : 75
      }`}
      src={src}
      alt={alt}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

const Projects = () => {
  return (
    <div className="container mx-auto " id="projects">
      <Title></Title>
      <h1 className="text-3xl font-semibold text-center text-main my-2">
        My Projects
      </h1>
      <h3 className="text-xl font-semibold text-center text-main my-2">
        Project I've Worked On
      </h3>
      <div className="flex  flex-col lg:flex-row shadow-[0_0_10px_#374151] max-w-7xl mx-auto justify-center items-center  bg-gray-700 rounded-xl lg:p-10 py-6 my-8">
        <div
          className="bg-black  mx-auto lg:h-[550px] w-[90vw] h-[300px]  rounded-xl lg:w-[600px] ease-in-out duration-[8000ms] bg-cover bg-top hover:bg-bottom"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/Hh7tchL/screencapture-echo-state-web-app-2023-12-11-16-18-33.png')",
          }}
        ></div>
        <div className="text-white text-center mt-4 lg:mt-none lg:w-1/2 space-y-2">
          <h1 className="text-4xl font-medium  text-main">Echo Estate</h1>
          <h3 className="text-2xl font-semibold ">Real Estate Website</h3>
          <h4 className="text-xl font-medium lg:w-[500px] w-[300px]  mx-auto tracking-wide text-gray-200 text-justify">
            A Real Estate Website For Buying And Selling Property With Managing
            Property For Both User And Agent.Manage User And Property And
            Advertise Property For Admin.
          </h4>
          <div className="flex gap-2  justify-center py-1">
            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
              React
            </h1>
            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
              Tailwind Css
            </h1>
          </div>
          <div className="flex justify-center items-center ">
            <button>
              <a
                href="https://github.com/arafat-sabbir/Echo-Estate"
                className="p-2 flex gap-2 hover:text-main  duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-2xl font-semibold text-main">
                  <VscGithubAlt />
                </span>
                See Code
              </a>
            </button>
            <button>
              <a
                href="https://echo-state.web.app"
                className="p-2 flex gap-2 hover:text-main  duration-300"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <span className="text-2xl font-semibold text-main">
                  <FiExternalLink />
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex  flex-col lg:flex-row-reverse shadow-[0_0_10px_#374151] max-w-7xl mx-auto justify-center items-center  bg-gray-700 rounded-xl lg:p-10 py-6 my-8">
        <div
          className="bg-black  mx-auto lg:h-[550px] w-[90vw] h-[300px]  rounded-xl lg:w-[600px] ease-in-out duration-[8000ms] bg-cover bg-top hover:bg-bottom"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/G0x6Hz4/screencapture-skill-exchange-port-web-app-2023-12-15-11-52-13.png')",
          }}
        ></div>
        <div className="text-white text-center lg:w-1/2 mt-4 lg:mt-none space-y-2">
          <h1 className="text-4xl font-medium text-main">Skill Exchange</h1>
          <h3 className="text-2xl font-semibold ">Freelance Website</h3>
          <h4 className="text-xl font-medium lg:w-[500px] w-[300px]  mx-auto tracking-wide text-gray-200 text-justify">
            A Freelance Website Where People can Post Job With Preferred Price
            Other People Can Bid On The Job And Manage Their Posted Jobs,Bid On
            Their Job And The Job They Bidded For..
          </h4>
          <div className="flex gap-2  justify-center py-1">
            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
              React
            </h1>
            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
              Tailwind Css
            </h1>
          </div>
          <div className="flex justify-center items-center ">
            <button>
              <a
                href="https://github.com/arafat-sabbir/Skill-Exchange"
                className="p-2 flex gap-2 hover:text-main  duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-2xl font-semibold text-main">
                  <VscGithubAlt />
                </span>
                See Code
              </a>
            </button>
            <button>
              <a
                href="https://skill-exchange-port.web.app/"
                className="p-2 flex gap-2 hover:text-main  duration-300"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <span className="text-2xl font-semibold text-main">
                  <FiExternalLink />
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex  flex-col lg:flex-row shadow-[0_0_10px_#374151] max-w-7xl mx-auto justify-center items-center  bg-gray-700 rounded-xl lg:p-10 py-6 my-8">
        <div
          className="bg-black  mx-auto lg:h-[550px] w-[90vw] h-[300px]  rounded-xl lg:w-[600px] ease-in-out duration-[8000ms] bg-cover bg-top hover:bg-bottom"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/KsZSRsY/screencapture-gadget-gear-hub-web-app-2023-12-11-17-25-31.png')",
          }}
        ></div>
        <div className="text-white text-center lg:w-1/2 mt-4 lg:mt-none space-y-2">
          <h1 className="text-4xl font-medium  text-main">Gadget Gear</h1>
          <h3 className="text-2xl font-semibold ">Gadget Shop</h3>
          <h4 className="text-xl font-medium lg:w-[500px] w-[300px]  mx-auto tracking-wide text-gray-200 text-justify">
            A Gadget Shop Website Where People Can See Job Based On Different
            Category And Add To Their Card Manage The Their Card Job..
          </h4>
          <div className="flex gap-2  justify-center py-1">
            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
              React
            </h1>
            <h1 className="bg-gray-800 px-4 py-1 rounded-sm text-lg font-medium shadow-2xl">
              Tailwind Css
            </h1>
          </div>
          <div className="flex justify-center items-center ">
            <button>
              <a
                href="https://github.com/arafat-sabbir/Gadget-Gear"
                className="p-2 flex gap-2 hover:text-main  duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-2xl font-semibold text-main">
                  <VscGithubAlt />
                </span>
                See Code
              </a>
            </button>
            <button>
              <a
                href="https://gadget-gear-hub.web.app/"
                className="p-2 flex gap-2 hover:text-main  duration-300"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
                <span className="text-2xl font-semibold text-main">
                  <FiExternalLink />
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React, { useState } from "react";
import Title from "../../../Utils/Title";

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
    <div className="container mx-auto h-screen">
      <Title></Title>
      <h1 className="text-3xl font-semibold text-center text-main my-2">
        My Projects
      </h1>
      <h3 className="text-xl font-semibold text-center text-main my-2">
        Project I've Worked On
      </h3>
      <div className="flex  bg-gray-700 rounded-xl p-10">
        <div
          className="bg-black mx-auto h-[600px] rounded-xl w-[600px] ease-in-out duration-[6000ms] bg-cover bg-top hover:bg-bottom"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/Hh7tchL/screencapture-echo-state-web-app-2023-12-11-16-18-33.png')",
          }}
        ></div>
        <div className="text-white w-[400px] h-[400px]">
           <h1 className="text-3xl font-semibold">Echo Estate</h1>
        </div>
      </div>
      {/* <div className="bg-black h-[600px] w-[600px] ease-in-out rounded-xl bg-cover bg-top hover:bg-bottom duration-[6000ms]" style={{backgroundImage: "url('https://i.ibb.co/Hh7tchL/screencapture-echo-state-web-app-2023-12-11-16-18-33.png')",}}>

</div> */}
    </div>
  );
};

export default Projects;

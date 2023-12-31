import { useInView } from "framer-motion";
import { useRef } from "react";
import { SlCloudDownload } from "react-icons/sl";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const animate1= useRef(null)
  const isInView1 = useInView(animate1)
  const Resume =
    "https://drive.usercontent.google.com/download?id=1S91Bs3aUd6c7T94pHfLM_w3N1JjSVkm5&export=download&authuser=0&confirm=t&uuid=62ea5f67-fa16-4dd3-9ffb-7e6c01204630&at=APZUnTWQ-m6nAvD41iZkqTZG85mN:1703451810896";
  return (
    <div className=" my-20 mx-auto max-w-7xl text-white ">
      <div className="flex flex-col lg:flex-row-reverse  gap-4 space-y-4">
        <div className="lg:w-1/2 mx-auto">
          <div ref={animate1}  style={{
            transform: isInView1 ? "none" : "scale(0)",
            opacity: isInView1 ? "1" : "0",
            transition: "all 1.8s",
        }} className="lg:w-11/12 w-[98vw] mx-auto  p-10">
            <img
              className="h-72 w-72 mx-auto"
              src="https://i.ibb.co/F3NN1t5/profile-pic-5.png"
              alt=""
            />
          </div>
        </div>
        <div ref={animate1} style={{
            transform: isInView1 ? "none" : "translateY(100px)",
            opacity: isInView1 ? "1" : "0",
            transition: "all 1.8s",
        }} className="lg:w-1/2 text-center lg:text-left space-y-4  flex flex-col justify-center">
          <h3 className="md:text-5xl text-3xl text-main font-semibold">
            <Typewriter
              words={[
                "Front End Developer",
                "React Js Developer",
                "MERN Stack Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={90}
              delaySpeed={1000}
            />
          </h3>
          <p className="text-lg tracking-wider w-[90vw] text-center lg:text-justify mx-auto lg:mx-0 lg:w-[600px]">
          Creating Engaging, Responsive User Interfaces. Enthusiastic about developing dynamic and secure web applications using the <span className="font-bold text-main">MERN</span> (MongoDB, Express.js, React, Node.js) stack. Dedicated to crafting visually captivating and seamlessly functional websites.
          </p>
          <div className="flex bg-black font-medium py-2 rounded-sm px-3 border-b-2 border-b-main lg:w-[38%] w-[80vw] mx-auto lg:mx-0 p-1 items-center lg:gap-6 gap-4 justify-center lg:justify-start ">
            <a
              href={Resume}
              download={Resume}
              className="flex justify-center px-1  items-center"
            >
              <span className="text-xl tracking-wide text-main ">
                <SlCloudDownload />
              </span>
              <span className="text-lg  ml-2">Download Resume</span>
            </a>
          </div>
          {/* <div className="flex gap-4">
          <a
            href="https://github.com/arafat-sabbir"
            className="mt-4 lg:border-2 p-2 rounded-3xl border-main"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-3xl tracking-wide text-main">
              <VscGithubAlt />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/arafat-sabbir/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 lg:border-2 p-2 rounded-3xl border-main"
          >

            <span className="text-main tracking-wide text-3xl">
              <SlSocialLinkedin />
            </span>
          </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;

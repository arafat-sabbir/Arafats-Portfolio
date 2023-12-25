import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { SlCloudDownload } from "react-icons/sl";


const Banner = () => {
  const Resume = "https://drive.usercontent.google.com/download?id=1S91Bs3aUd6c7T94pHfLM_w3N1JjSVkm5&export=download&authuser=0&confirm=t&uuid=62ea5f67-fa16-4dd3-9ffb-7e6c01204630&at=APZUnTWQ-m6nAvD41iZkqTZG85mN:1703451810896"
  return (
    <div className=" my-20 mx-auto max-w-7xl text-white ">
      <div className="flex flex-col lg:flex-row  gap-4 space-y-4">
        <div className="lg:w-1/2">
          <div className="lg:w-7/12 w-[90vw] border-4 text-center mx-auto lg:mx-0 p-10 border-main  rounded-tr-none rounded-[80px] rounded-bl-none">
            <img
              className="h-44 w-44 mx-auto"
              src="https://i.ibb.co/F3NN1t5/profile-pic-5.png"
              alt=""
            />
            <div className="space-y-2">
              <h3 className="text-2xl tracking-wide mt-2 text-main">
                Arafat Sabbir
              </h3>
              <h3 className="text-xl tracking-wide ">Front-End DEVELOPER</h3>
              <p className="flex items-center gap-1 tracking-wide justify-center font-medium">
                
                <span className="text-main ">
                  <MdOutlineEmail />
                </span>
                arafatshabbir8(at)gmail(dot)com
              </p>
              <p className="flex items-center tracking-wider gap-1 justify-center font-medium">
                
                <span className="text-main">
                  <MdOutlineLocationOn />
                </span>
                Chittagong,Bangladesh
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 text-center lg:text-left space-y-4  flex flex-col justify-center">
          <h3 className="text-4xl text-main">Front-End Developer</h3>
          <p className="text-lg tracking-wider w-[90vw] mx-auto lg:mx-0 lg:w-[600px]">
            Front-End Developer | Building Stunning, Secure Web Apps. Passionate
            about crafting visually appealing, fully functional, and secure web
            applications.For Great User Experience...
          </p>
          <div className="flex border-2  border-main rounded-full lg:w-[35%] w-[80vw] mx-auto lg:mx-0 p-1 items-center lg:gap-6 gap-4 justify-center lg:justify-start ">
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

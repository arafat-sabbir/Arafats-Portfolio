import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { SlCloudDownload } from "react-icons/sl";

const Banner = () => {
    const resume = 'https://drive.google.com/u/0/uc?id=1P-6pliZJKV6csqTTDxK4FpQPPyxrJwXo&export=download'
  return (
    <div className=" my-20 mx-auto max-w-7xl text-white ">
      <div className="flex  gap-4">
        <div className="w-1/2">
          <div className="w-7/12 border-4 text-center mx-auto lg:mx-0 p-10 border-main  rounded-tr-none rounded-[80px] rounded-bl-none">
            <img
              className="h-44 w-44 mx-auto"
              src="https://i.ibb.co/F3NN1t5/profile-pic-5.png"
              alt=""
            />
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold mt-2 text-main">
                Arafat Sabbir
              </h3>
              <h3 className="text-xl font-semibold ">MERN-STACK DEVELOPER</h3>
              <p className="flex items-center gap-1 justify-center font-medium">
                {" "}
                <span className="text-main">
                  <MdOutlineEmail />
                </span>{" "}
                arafatshabbir8@gmail.com
              </p>
              <p className="flex items-center gap-1 justify-center font-medium">
                {" "}
                <span className="text-main">
                  <MdOutlineLocationOn />
                </span>{" "}
                Chittagong,Bangladesh
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2  flex flex-col justify-center space-y-2 ">
          <h1 className="text-4xl">Hello</h1>
          <h3 className="text-4xl">
            I'm <span className="text-main">Arafat Sabbir</span>
          </h3>
          <h3 className="text-4xl">Front-End Developer</h3>
          <p className="text-lg font-semibold w-[600px]">
            MERN Stack Developer | Building Stunning, Secure Web Apps.
            Passionate about crafting visually appealing, fully functional, and
            secure web applications.For Great User Experience...
          </p>
          <div className="flex gap-6">
          <a href="https://github.com/arafat-sabbir" className="mt-4 border-2 p-2 rounded-3xl border-main" target="_blank" rel="noreferrer"><span className="text-3xl font-semibold text-main"><VscGithubAlt/></span></a>
          <a href="https://www.linkedin.com/in/arafat-sabbir/" target="_blank" rel="noreferrer" className="mt-4 border-2 p-2 rounded-3xl border-main"> <span className="text-main font-semibold text-3xl"><SlSocialLinkedin/></span> </a>
          <a href="https://twitter.com/arafatshabbir8" target="_blank" rel="noreferrer" className="mt-4 border-2 p-2 rounded-3xl border-main"><span className="text-3xl font-semibold text-main"><BsTwitterX/></span></a>
          <a href={resume} download={resume}  className="flex justify-center items-center border border-main rounded-3xl p-2 mt-2"><span className="text-3xl font-semibold text-main "><SlCloudDownload/></span> <span className="text-xl ml-2">Download Cv</span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import { FaLinkedinIn } from "react-icons/fa";
import { FaVoicemail, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="text-white">
        <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <Link to={'/'} className="flex gap-2">
            <img
              className="w-auto h-7"
              src="https://i.ibb.co/F3NN1t5/profile-pic-5.png"
              alt=""
            />
            <h1 className="text-xl font-semibold text-main">Arafat Sabbir</h1>
          </Link>

          <p className="text-sm text-main  ">
            © Copyright 2023. All Rights Reserved.
          </p>

          <div className="flex -mx-2">
          <a
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1.5 text-main text-2xl ml-2  transition-colors duration-300 transform hover:text-[#0BE2B9]"
                    href="https://github.com/arafat-sabbir"
                  >
                    <FiGithub />
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1.5 text-main text-2xl ml-2  transition-colors duration-300 transform hover:text-[#0BE2B9]"
                    href="https://www.linkedin.com/in/arafat-sabbir/"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1.5 text-main text-2xl ml-2  transition-colors duration-300 transform hover:text-[#0BE2B9]"
                    href="https://twitter.com/arafatshabbir8"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1.5 text-main text-2xl ml-2  transition-colors duration-300 transform hover:text-[#0BE2B9]"
                    href="mailto:arafatshabbir8@gmail.com"
                  >
                    <AiOutlineMail />
                  </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

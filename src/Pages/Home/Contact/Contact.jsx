import Title from "../../../Utils/Title";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log(name,email,message);
  };
  return (
    <div className="my-20 container mx-auto">
      <Title></Title>
      <h3 className="text-3xl font-semibold text-main text-center">
        Contact Me
      </h3>
      <section className="text-white ">
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="lg:w-1/2 lg:mx-6">
              <h1 className="text-2xl font-semibold  capitalize text-main lg:text-3xl">
                Contact Me for more info
              </h1>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-[#0BE2B9] dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="mx-2 truncate w-72 dark:text-gray-400">
                   Chittagong, Bangladesh.
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-[#0BE2B9] dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="mx-2 truncate w-72 dark:text-gray-400">
                    +8801632029032
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-[#0BE2B9] dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2 truncate w-72 dark:text-gray-400">
                    arafatshabbir8@gmail.com
                  </span>
                </p>
              </div>

              <div className="mt-6 w-80 md:mt-8">
                <h3 className="text-main text-xl  ">Follow Me 👇</h3>

                <div className="flex mt-4 -mx-1.5">
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
                </div>
              </div>
            </div>

            <div  className="mt-8 lg:w-1/2 lg:mx-6 rounded-xl">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-transparent border-main rounded-lg shadow-[0_0_30px_#374151]  ">
                <h1 className="textLg font-medium">What do you want to ask</h1>

                <form className="mt-6" onSubmit={handleSubmit}>
                  <div className="flex-1">
                    <label className="block mb-2 text-sm  ">Full Name</label>
                    <input
                    name="name"
                      type="text"
                      placeholder="John Doe"
                      className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-transparent  border  rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm  ">
                      Email address
                    </label>
                    <input
                    name="email"
                      type="email"
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-transparent  border  rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm  ">Message</label>
                    <textarea
                    name="message"
                      className="block w-full h-32 px-5 py-3 mt-2 placeholder-gray-400 bg-transparent  border  rounded-md md:h-48 dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full px-6 py-3 mt-6 rounded-lg text-black font-medium bg-main ">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

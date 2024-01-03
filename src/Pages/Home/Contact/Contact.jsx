import Title from "../../../Utils/Title";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending Message");
    const serviceId = "service_pqz7dvr";
    const templateId = "template_3akg9of";
    const userId = "-uhDZUShHJrbeRAXv";
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Arafat Sabbir",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log(response);
        if (response.status == "200") {
          toast.success("Message Sent Successfully I Will Contact You Letter", {
            id: toastId,
          });
        }
        form.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <div className="my-20 container mx-auto" id="contact">
      <Title></Title>
      <h3 className="text-3xl font-semibold text-main text-center">
        Contact Me
      </h3>
      <section className="text-white ">
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6 justify-center">
            <div className="mt-8 lg:w-1/2 lg:mx-6 rounded-xl">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-transparent border-main rounded-lg  ">
                <h1 className="textLg font-medium">What do you want to ask</h1>

                <form className="mt-6" onSubmit={handleSubmit}>
                  <div className="flex-1">
                    <label className="block mb-2 text-sm  ">Full Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-transparent  border  rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 border-main  focus:border-dashed focus:outline-none "
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm  ">
                      Email address
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-transparent  border  rounded-md dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 border-main  focus:border-dashed focus:outline-none "
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm  ">Message</label>
                    <textarea
                      required
                      name="message"
                      className="block w-full h-32 px-5 py-3 mt-2 placeholder-gray-400 bg-transparent  border  rounded-md md:h-48 dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 border-main dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:border-dashed focus:ring-opacity-40"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 mt-6 rounded-lg  font-semibold bg-black text-white border-b-2 border-b-main  "
                  >
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
